import { CoreAssistantMessage, CoreMessage, CoreUserMessage } from "ai";

export const LLMS = {
    anthropic: {
        sonnet: "claude-3-5-sonnet-20240620",
        haiku: "claude-3-haiku-20240307",
    },
    openai: {
        gpt4o: "gpt-4o",
        gpt4oMini: "gpt-4o-mini",
    },
    groq: {
        groqLlama405b: "llama-3.1-405b-reasoning",
        groqLLama70b: "llama-3.1-70b-versatile",
        groqLLama8b: "llama-3.1-8b-instant",
        groqMistral8x7b: "mixtral-8x7b-32768",
    },
    google: {
        geminiFlash: "gemini-1.5-flash",
        geminiPro: "gemini-1.5-pro",
    },
};

export const RAG_ENTRIES = {
    QA_PROMPT: "rag-qa-prompt",
    QA_EXAMPLES: "rag-qa-examples",
    QA_BASIC_KNOWLEDGE: "rag-qa-basic-knowledge",
    QA_BASIC_TYPES: "rag-qa-basic-types",
    //
    DOCS_PROMPT: "rag-docs-prompt",
    DOCS_SYSTEM_MSG: "rag-docs-system-msg",
    //
    ROUTER_PROMPT: "rag-router-prompt",
} as const;

export type RAGEntry = (typeof RAG_ENTRIES)[keyof typeof RAG_ENTRIES];

export interface RagOptions {
    embeddedDocs: boolean;
    embeddedTypes: boolean;
    concepts: boolean;
    basicTypes: boolean;
}

export const DEFAULT_RAG_OPTIONS: RagOptions = {
    embeddedDocs: false,
    embeddedTypes: true,
    concepts: true,
    basicTypes: true,
};

export type RagOption = keyof RagOptions;
