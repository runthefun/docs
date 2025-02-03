import "server-only";
import { LLMS } from "../constants";
import { systemMsg } from "./systemMsg";
import { defaultBasicTypes, defaultConcepts } from "../concepts";
import { getModel, setTemplateValues } from "../utils";
import { streamText } from "ai";
// import { fetchRagEntry, setTemplateValues } from "../utils";
// import { streamText } from "ai";

export interface ScriptingChainOpts {
    model?: string;
    systemMsg?: string;
    basicDocs?: string;
    basicTypes?: string;
    messages: any[];
}

export async function codeai_prompt(opts: ScriptingChainOpts) {
    //
    const systemPrompt = opts.systemMsg || systemMsg;
    let concepts = opts.basicDocs || defaultConcepts;

    let basicTypes = opts.basicTypes || defaultBasicTypes;

    // let [typings, examples] = await Promise.all([
    //     getDtsRetriever(),
    //     null, //getExamplesRetriever(),
    // ]);

    let system = await Promise.all([concepts, basicTypes]).then(
        ([concepts, basicTypes]) => {
            //
            return setTemplateValues(systemPrompt, {
                concepts,
                basicTypes,
            });
        }
    );

    return system;
}
