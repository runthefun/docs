import "server-only";
import { systemMsg } from "./systemMsg";
import { defaultConcepts } from "../concepts";
import { defaultApi } from "../api";
import { setTemplateValues } from "../utils";

export interface ScriptingChainOpts {
  model?: string;
  systemMsg?: string;
  concepts?: string;
  api?: string;
  messages: any[];
}

export async function codeai_prompt(opts: ScriptingChainOpts) {
  //
  const systemPrompt = opts.systemMsg || systemMsg;
  let concepts = opts.concepts || defaultConcepts;
  let api = opts.api || defaultApi;

  // let [typings, examples] = await Promise.all([
  //     getDtsRetriever(),
  //     null, //getExamplesRetriever(),
  // ]);

  let system = await Promise.all([concepts, api]).then(([concepts, api]) => {
    //
    return setTemplateValues(systemPrompt, {
      concepts,
      api,
    });
  });

  return system;
}
