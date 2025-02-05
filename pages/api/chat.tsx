import { NextRequest, NextResponse } from "next/server";
import { codeai_prompt } from "../../components/qabot/utils/pipelines/scripting";
import { CoreMessage, generateText, LanguageModelV1, streamText } from "ai";
import { groq } from "@ai-sdk/groq";
import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { google, createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
  apiKey: process.env.OPEN_ROUTER_API_KEY,
});

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  //
  try {
    const { messages, model: modelName, noStream } = await req.json();

    const system = await codeai_prompt({
      messages,
    });

    // const model = getModel(LLMS.groq.groqDeepseekR170b);

    let settings = null;
    let openaiOpts = null;

    let model = anthropic("claude-3-5-sonnet-latest");

    if (modelName === "deepseek") {
      model = openrouter.chat("deepseek/deepseek-r1");
    } else if (modelName === "groq") {
      model = groq("deepseek-r1-distill-llama-70b");
    } else if (modelName === "sonnet") {
      model = anthropic("claude-3-5-sonnet-latest");
    } else if (modelName === "haiku") {
      model = anthropic("claude-3-5-haiku-latest");
    } else if (modelName === "o3-mini-low") {
      model = openai("o3-mini");
      openaiOpts = { reasoningEffort: "low" };
    } else if (modelName === "o3-mini-medium") {
      model = openai("o3-mini");
      openaiOpts = { reasoningEffort: "medium" };
    } else if (modelName === "o3-mini-high") {
      model = openai("o3-mini");
      openaiOpts = { reasoningEffort: "high" };
    } else if (modelName === "gemini") {
      model = createGoogleGenerativeAI({
        apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
      })("gemini-2.0-flash-thinking-exp");
    }

    if (openaiOpts) {
      settings = {
        providerOptions: {
          openai: { reasoningEffort: "medium" },
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
