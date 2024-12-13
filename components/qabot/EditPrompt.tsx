import styles from "./styles.module.scss";
import { useState } from "react";
import { useAdminStore } from "./adminStore";
import { defPromptTemplate } from "./constants";

export function EditPrompt({ onClose }) {
    //

    const { state, update } = useAdminStore();

    return (
        <div
            style={{
                width: "800px",
                height: "600px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <textarea
                style={{
                    flex: "1",
                    padding: "1rem",
                }}
                value={state.promptTemplate}
                onChange={(e) => {
                    //
                    update((s) => {
                        s.promptTemplate = e.target.value;
                    });
                }}
                placeholder="Type your prompt here..."
            />
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "flex-end",
                }}
            >
                <button
                    onClick={() => {
                        update((s) => {
                            //
                            s.promptTemplate = defPromptTemplate;
                        });
                    }}
                    className={styles.submitButton}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
