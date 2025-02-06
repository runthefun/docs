import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGroq } from "@ai-sdk/groq";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
// import { db } from "utils/db/firebase-server";
import { LLMS } from "./constants";

/*
export const RAG_COLLECTION = "rag";

export async function fetchRagEntry(enrty: string, defaultVal?: string) {
    //
    return defaultVal;
    let result = defaultVal;

    const ref = db.collection(RAG_COLLECTION);

    const doc = await ref.doc(enrty).get();

    if (doc.exists) {
        //
        const data = doc.data();

        if (data) {
            //
            result = data.template;
        }
    }

    return result;
}

export async function saveRagEntry(enrty: string, value: string) {
    //
    return value;
    if (!value) {
        //
        throw new Error("Value is empty for " + enrty);
    }

    const ref = db.collection(RAG_COLLECTION);

    await ref.doc(enrty).set({
        template: value,
    });

    return value;
}
*/

const providers = {
  openai: createOpenAI({
    compatibility: "strict",
  }),

  anthropic: createAnthropic({}),
  google: createGoogleGenerativeAI({}),
  groq: createGroq({}),
};

export function setTemplateValues(
  template: string,
  values: Record<string, string>
) {
  //
  return template.replace(/{{(.*?)}}/g, (match, key) => {
    //
    return values[key] || match;
  });
}

const defaultModel = LLMS.openai.gpt4oMini;

export function getModel(model: string) {
  //
  if (model) {
    if (model in LLMS.openai) {
      return providers.openai(LLMS.openai[model]);
    } else if (model in LLMS.anthropic) {
      return providers.anthropic(LLMS.anthropic[model]);
    } else if (model in LLMS.groq) {
      return providers.groq(LLMS.groq[model]);
    } else if (model in LLMS.google) {
      return providers.google(LLMS.google[model]);
    }
  }

  return providers.openai(defaultModel);
}
