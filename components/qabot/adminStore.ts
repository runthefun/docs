import {
    DEFAULT_RAG_OPTIONS,
    defPromptTemplate,
    LLMS as MODELS,
} from "./constants";
import { Store, useStore } from "../../hooks/useStore";

export const disabledModels = {
    [MODELS.groq.groqLlama405b]: true,
};

export const LLMS = MODELS;

export type LLM = string;

export const adminStore = new Store({
    promptTemplate: defPromptTemplate,
    showThinking: false,
    ragOptions: DEFAULT_RAG_OPTIONS,
    model: MODELS.openai.gpt4o,
});

export function useAdminStore() {
    //
    return useStore(adminStore);
}

export function useAdminState() {
    //
    const { state } = useAdminStore();

    return state;
}
