import { NextRequest, NextResponse } from "next/server";
import { codeai_prompt } from "../../components/qabot/utils/pipelines/scripting";
import { getModel } from "../../components/qabot/utils/pipelines/utils";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

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

    const model = getModel(modelName);

    const result = streamText({
      model: openai("o3-mini"),
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
