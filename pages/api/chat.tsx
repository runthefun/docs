import { NextRequest, NextResponse } from "next/server";
import { codeai_prompt } from "../../components/qabot/utils/pipelines/scripting";
import { CoreMessage, generateText, LanguageModelV1, streamText } from "ai";
import { groq } from "@ai-sdk/groq";
import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
  apiKey: process.env.OPEN_ROUTER_API_KEY,
});

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export const config = {
  runtime: "edge",
};

function addCorsHeaders(headers: Headers): Headers {
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return headers;
}

export async function OPTIONS(req: Request) {
  const headers = addCorsHeaders(new Headers());
  return new NextResponse(null, { headers, status: 204 });
}

export default async function handler(req: NextRequest) {
  //
  if (req.method === "OPTIONS") {
    return OPTIONS(req);
  }

  if (req.method !== "POST") {
    return NextResponse.json(
      {
        type: "error",
        error: "Invalid method",
      },
      {
        status: 405,
      }
    );
  }

  try {
    const { messages, model: modelName, noStream } = await req.json();

    const system = await codeai_prompt({
      messages,
    });

    // const model = getModel(LLMS.groq.groqDeepseekR170b);

    let settings = null;
    let openaiOpts = null;

    let model = anthropic("claude-3-5-sonnet-latest");

    // Those 2 seem broken atm
    if (modelName === "deepseek") {
      model = openrouter.chat("deepseek/deepseek-r1");
    } else if (modelName === "groq") {
      model = groq("deepseek-r1-distill-llama-70b");
    }
    // Claude
    else if (modelName === "sonnet") {
      model = anthropic("claude-3-5-sonnet-latest");
    } else if (modelName === "haiku") {
      model = anthropic("claude-3-5-haiku-latest");
    }
    // o3
    else if (modelName === "o3-mini-low") {
      model = openai("o3-mini");
      openaiOpts = { reasoningEffort: "low" };
    } else if (modelName === "o3-mini-medium") {
      model = openai("o3-mini");
      openaiOpts = { reasoningEffort: "medium" };
    } else if (modelName === "o3-mini-high") {
      model = openai("o3-mini");
      openaiOpts = { reasoningEffort: "high" };
    }
    // gemini
    else if (modelName === "gemini") {
      model = google("gemini-2.0-flash-001");
    } else if (modelName === "gemini-think") {
      model = google("gemini-2.0-flash-thinking-exp-01-21");
    } else if (modelName === "gemini-flash-lite") {
      model = google("gemini-2.0-flash-lite-preview-02-05");
    } else if (modelName === "gemini-pro") {
      model = google("gemini-2.0-pro-exp-02-05");
    }

    if (openaiOpts) {
      settings = {
        providerOptions: {
          openai: openaiOpts,
        },
      };
    }

    console.log("chat", {
      provider: model.provider,
      model: model.modelId,
      system: system.length + " chars",
      settings,
    });

    let systemMsg: CoreMessage = {
      role: "system",
      content: system,
    };

    if (model.provider.startsWith("anthropic")) {
      systemMsg.providerOptions = {
        anthropic: { cacheControl: { type: "ephemeral" } },
      };
    }

    const genOptions = {
      model,
      ...settings,
      messages: [systemMsg].concat(messages),
    };

    if (noStream) {
      //
      const result = await generateText(genOptions);

      return NextResponse.json(result);
    }

    const result = streamText(genOptions);

    const response = result.toDataStreamResponse();

    addCorsHeaders(response.headers);

    return response;
    //
  } catch (e) {
    //
    console.error("error", e);

    return NextResponse.json(
      {
        type: "error",
        error: e.message,
      },
      {
        status: 500,
      }
    );
  }
}
