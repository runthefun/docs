import { NextRequest, NextResponse } from "next/server";
import { codeai_prompt } from "../../components/qabot/utils/pipelines/scripting";
import {
  CoreMessage,
  generateText,
  LanguageModelV1,
  simulateReadableStream,
  streamText,
} from "ai";
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

  const stream = simulateReadableStream({
    chunks: ["Here's the code", code, "Create a new file with this code"],
  });

  // send response with stream
  const response = new NextResponse(stream);

  addCorsHeaders(response.headers);

  return response;
  //
}

const code = `
\`\`\`ts
import { ScriptBehavior, $Param as P } from "@awe/scripting";

export default class MyBehavior extends ScriptBehavior {

    static config = {
        title: "My Behavior",
    }

    prop = P.String("Hello");

    onReady() {
        // Called when the behavior is ready
    }
}
\`\`\`
`;
