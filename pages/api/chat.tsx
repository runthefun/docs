import { NextRequest, NextResponse } from "next/server";
import { codeai_prompt } from "../../components/qabot/utils/pipelines/scripting";
import { LanguageModelV1, streamText } from "ai";
import { groq } from "@ai-sdk/groq";
import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  //
  try {
    const { messages, model: modelName } = await req.json();

    const system = await codeai_prompt({
      messages,
    });

    // const model = getModel(LLMS.groq.groqDeepseekR170b);

    let openaiOpts = { reasoningEffort: "medium" };

    let model: LanguageModelV1;

    if (modelName === "groq") {
      model = groq("deepseek-r1-distill-llama-70b");
    } else if (modelName === "sonnet") {
      model = anthropic("claude-3-5-sonnet-latest");
    } else if (modelName === "haiku") {
      model = anthropic("claude-3-5-haiku-latest");
    } else if (modelName === "o3-mini-low") {
      model = openai("o3-mini");
      openaiOpts = { reasoningEffort: "low" };
    } else if (modelName === "o3-mini-high") {
      model = openai("o3-mini");
      openaiOpts = { reasoningEffort: "high" };
    } else {
      model = openai("o3-mini");
    }

    console.log("chat", {
      model: model.modelId,
      ...(model.provider.startsWith("openai") ? openaiOpts : {}),
      system: system.length + " chars",
    });

    const result = streamText({
      model,
      providerOptions: {
        openai: { reasoningEffort: "medium" },
      },
      system,
      messages,
    });

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
