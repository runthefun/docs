"use client";

import React from "react";
import styles from "./styles.module.scss";
import { ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import { useAdminStore } from "./adminStore";
import { Modal } from "./Modal";
import { EditModel } from "./EditModel";
import { EditPrompt } from "./EditPrompt";
import { RAG_ENTRIES, RAGEntry, RagOption } from "./constants";

export function AdminPanel() {
    //
    const { state, update } = useAdminStore();

    const [currentModal, setCurrentModal] = useState<RAGEntry>(null);

    const onClose = () => {
        setCurrentModal(null);
    };

    let modalContent = null;

    if (currentModal === RAG_ENTRIES.QA_PROMPT) {
        //
        modalContent = <EditPrompt onClose={onClose} />;
        //
    }

    const modal = modalContent && (
        <Modal onClose={onClose}>{modalContent}</Modal>
    );

    const editRagBtn = (id: RAGEntry, text: string) => (
        <button
            onClick={() => {
                setCurrentModal(id);
            }}
            className={styles.promptButton}
        >
            {text}
        </button>
    );

    return (
        <>
            {modal}
            <div className={styles.admin}>
                <EditModel />

                <label>
                    <input
                        type="checkbox"
                        checked={state.showThinking}
                        onChange={() => {
                            //
                            update((s) => {
                                s.showThinking = !s.showThinking;
                            });
                        }}
                    />
                    Show Thinking
                </label>
                <EditRagOption id={"concepts"} text={"Basic Docs"} />
                <EditRagOption id={"basicTypes"} text={"Basic types"} />
                <EditRagOption id={"embeddedDocs"} text={"Emb. Docs"} />
                <EditRagOption id={"embeddedTypes"} text={"Emb. types"} />
            </div>
        </>
    );
}

function Menu({ invite, options, onSelect }) {
    //
    return (
        <select
            className={styles.button}
            value={invite}
            onChange={(e) => {
                //
                onSelect(e.target.value);
            }}
        >
            <option value={invite} disabled>
                {invite}
            </option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.text}
                </option>
            ))}
        </select>
    );
}

export function EditRagOption({ id, text }: { id: RagOption; text: string }) {
    //
    const { state, update } = useAdminStore();

    return (
        <label>
            <input
                type="checkbox"
                checked={state.ragOptions[id]}
                onChange={() => {
                    //
                    update((s) => {
                        s.ragOptions[id] = !s.ragOptions[id];
                    });
                }}
            />
            {text}
        </label>
    );
}
