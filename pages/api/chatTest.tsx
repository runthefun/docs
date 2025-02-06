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

  const uid = Math.random().toString(36).substring(7);

  const stream = simulateReadableStream({
    chunks: [
      "Here's the code",
      ...Array(10)
        .fill(0)
        .map((_, i) => {
          return "Dummy line " + i + "\n";
        }),
      code(uid),
      "Create a new file with this code",
    ],
    initialDelayInMs: 1000,
    chunkDelayInMs: 1000,
  });

  // send response with stream
  const response = new NextResponse(stream);

  addCorsHeaders(response.headers);

  return response;
  //
}

const code = (t: string) => `
\`\`\`ts
import { ScriptBehavior, $Param as P } from "@awe/scripting";

export default class MySpinBehavior extends ScriptBehavior {

    static config = {
        title: "My Behavior",
    }

    speed = P.Number(1, { min: 0, max: 10 });

    onReady() {
        const avatar = Player.avatar;
    }

    onFrame() {
        
        this.host.rotation.y += this.speed * Math.PI / 180;
    }
}
\`\`\`
`;
