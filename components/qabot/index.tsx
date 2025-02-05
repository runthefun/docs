// @ts-check
import React, { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import styles from "./styles.module.scss";
import { RenderAnswer } from "./RenderAnswer";
import { useAdminState } from "./adminStore";
import { QuickstartInterface } from "./Quickstart/QuickstartInterface";
import { useFeedbackStore } from "./feedbackStore";

let endpoint = "/api/chat";

let search =
  typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : null;

let model = search?.get("model");

// if (process.env.NODE_ENV === "development") {
//     //
//     endpoint = "http://localhost:3000/api/qabot";
// }

export default function RagQa() {
  const { ragOptions, showThinking } = useAdminState();

  const threadIdRef = useRef<string>(null);

  if (!threadIdRef.current) {
    threadIdRef.current =
      typeof window !== "undefined" ? crypto.randomUUID() : null;
  }

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setInput,
    data,
  } = useChat({
    api: endpoint,
    body: {
      model,
      threadId: threadIdRef.current,
    },
    onError: (error) => {
      //
      console.error("errrrrrrrr", error);
      alert("Error: " + error.message);
    },
    onFinish: (_, opts) => {
      console.log("onFinish", opts.finishReason);
    },
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <div className={styles.completionArea}>
          {isLoading && messages.length == 1 ? (
            // <h1>Loading </h1>
            <div className={styles.loadingArea}>
              <div
                className={styles.messageBubble}
                style={{ background: "#ccc" }}
              >
                {messages?.[0]?.content}
              </div>
              <h1 style={{ textAlign: "center" }}>Thinking...</h1>
              <img
                src="https://media1.tenor.com/m/5td8ceS5BpsAAAAd/pablo-waiting.gif"
                style={{ width: 500, margin: "0 auto" }}
              />
            </div>
          ) : isLoading || messages.length > 1 ? (
            <div className={styles.answerArea}>
              {messages.map((msg) => {
                if (msg.role === "user") {
                  return <UserMessage key={msg.id} msg={msg} />;
                } else {
                  return (
                    <AIMessage key={msg.id} msg={msg} isLoading={isLoading} />
                  );
                }
              })}
            </div>
          ) : (
            <QuickstartInterface
              onSelect={(promptOption) => setInput(promptOption.prompt)}
            />
          )}
        </div>
        <div ref={messagesEndRef} />
        <div className={styles.inputArea}>
          {/* add onkeydown, if enter, handlesubmit call */}

          <form onSubmit={handleSubmit} className={styles.inputContainer}>
            <textarea
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              onChange={handleInputChange}
              placeholder="Ask away... But be patient, it's still dawgs only"
              className={styles.chatInput}
            />
            <button
              style={{
                width: "100px",
                alignSelf: "flex-end",
              }}
              disabled={isLoading}
              type="submit"
              onClick={handleSubmit}
              className={styles.submitButton}
            >
              {isLoading ? "Loading..." : "Send"}
            </button>
          </form>
          <p>This shouldn't be out, it's very experimental. </p>
        </div>
      </div>
      {/* {process.env.NODE_ENV === "development" && <AdminPanel />} */}
    </div>
  );
}

export function AIMessage({
  msg,
  isLoading,
}: {
  msg: any;
  isLoading: boolean;
}) {
  //
  const showThinking = process.env.NODE_ENV === "development";

  const completion = msg.content;

  let { runId, thinking, answer } = parseAIMessage(completion);

  const { feedbacks, sendFeedback, isSubmitting } = useFeedbackStore();

  const feedback = feedbacks[runId];

  return (
    <div className={styles.botMsg}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span>🤖</span>
        </div>
      </div>
      {thinking && showThinking && (
        <pre className={styles.thinking}>{thinking}</pre>
      )}
      <RenderAnswer content={answer} isLoading={isLoading} />
      {runId && (
        <span
          style={{
            display: "inline-flex",
            flexDirection: "row",
            gap: "0.5rem",
          }}
        >
          <button
            style={{
              fontSize: "0.8em",
              cursor: "pointer",
              padding: "4px",
              borderRadius: "4px",
              background: feedback?.score === 1 ? "#ccc" : "",
            }}
            disabled={isSubmitting}
            onClick={() => sendFeedback({ runId, score: 1 })}
          >
            👍
          </button>
          <button
            style={{
              fontSize: "0.8em",
              cursor: "pointer",
              padding: "4px",
              borderRadius: "4px",
              background: feedback?.score === -1 ? "#ccc" : "",
            }}
            disabled={isSubmitting}
            onClick={() => sendFeedback({ runId, score: -1 })}
          >
            👎
          </button>
        </span>
      )}
    </div>
  );
}

export function UserMessage({ msg }: { msg: any }) {
  //
  return <div className={styles.messageBubble}>{msg.content}</div>;
}

function parseAIMessage(msg: string) {
  /*
        format of completion:

        <run>runId</run> // optional
        <thinking>thinking</thinking> // optional
        <answer>answer</answer>
    */

  let runId = "";
  let thinking = "";
  let answer = "";

  const runIdIndex = msg.indexOf("<run>");
  const runIdEndIndex = msg.indexOf("</run>");

  if (runIdIndex !== -1 && runIdEndIndex !== -1) {
    runId = msg.slice(runIdIndex + "<run>".length, runIdEndIndex);

    msg = msg.slice(runIdEndIndex + "</run>".length);
  }

  let thinkingIndex = msg.indexOf("<think>");
  let thinkingEndIndex = msg.indexOf("</think>");

  if (thinkingIndex !== -1 && thinkingEndIndex !== -1) {
    //
    thinking = msg.slice(thinkingIndex + "<think>".length, thinkingEndIndex);

    msg = msg.slice(thinkingEndIndex + "</think>".length);
  }

  let answerIndex = msg.indexOf("<answer>");
  let answerEndIndex = msg.indexOf("</answer>");

  if (answerIndex !== -1 && answerEndIndex !== -1) {
    answer = msg.slice(answerIndex + "<answer>".length, answerEndIndex);
  } else {
    answer = msg;
  }

  return { runId, thinking, answer };
}
