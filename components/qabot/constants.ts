export const defPromptTemplate = `
You're AI an assistant for question answering questions to users of Oncyber, a 3D web app creation platform. Use the following pieces of retrieved context to answer the question. 

The assistant should maintain a friendly, encouraging, and patient tone, making users feel supported and motivated. 

Avoid long answers and, if the answer involves a task, respond with a list of concrete steps. 

When the task involves scripting, the answer should clearly indicate where the code goes: either by creating a ScriptBehavior or adding it to main script 

<concepts>
{concepts}
</concepts>

<basicTypes>
{basicTypes}
</basicTypes>

<examples>
{examples}
</examples>

<docs>
{docs}
</docs>

<typings>
{typings}
</typings>

<question>
{question}
</question>


Think step by step, put your reasoning in <thinking> tags, and provide the answer in <answer> tags.
Write the answer in markdown format.

If the context doesn't provide specific infos about the query, just say you don't know. NEVER INCLUDE in the source code something that you're not sure is in the api
`;

export const RAG_COLLECTION = "rag";

export const RAG_ENTRIES = {
    QA_PROMPT: "rag-qa-prompt",
    QA_EXAMPLES: "rag-qa-examples",
    QA_BASIC_KNOWLEDGE: "rag-qa-basic-knowledge",
    QA_BASIC_TYPES: "rag-qa-basic-types",
} as const;

export type RAGEntry = (typeof RAG_ENTRIES)[keyof typeof RAG_ENTRIES];

export const DEF_RAG_VALUES: Record<RAGEntry, string> = {
    [RAG_ENTRIES.QA_PROMPT]: defPromptTemplate,
    [RAG_ENTRIES.QA_EXAMPLES]: "",
    [RAG_ENTRIES.QA_BASIC_KNOWLEDGE]: "",
    [RAG_ENTRIES.QA_BASIC_TYPES]: "",
};

export interface RagOptions {
    embeddedDocs: boolean;
    embeddedTypes: boolean;
    concepts: boolean;
    basicTypes: boolean;
    examples: boolean;
}

export const DEFAULT_RAG_OPTIONS: RagOptions = {
    embeddedDocs: true,
    embeddedTypes: true,
    concepts: true,
    basicTypes: true,
    examples: true,
};

export type RagOption = keyof RagOptions;

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
};
