import { useState } from "react";
import { Store, useStore } from "../../hooks/useStore";

export interface Feedback {
    runId: string;
    id?: string;
    score: number;
    comment?: string;
    correction?: string;
}

export interface FeedbackState {
    feedbacks: Record<string, Feedback>;
}

// function getSessionFeedbacks() {
//     if (typeof window === "undefined") {
//         return {};
//     }

//     return JSON.parse(sessionStorage.getItem("feedbacks") || "{}");
// }

const feedbackStore = new Store<FeedbackState>({
    feedbacks: {},
});

let endpoint = "https://oo-git-ai-oncyber.vercel.app/api/qabot/feedback";

// if (process.env.NODE_ENV === "development") {
//     //
//     endpoint = "http://localhost:3000/api/qabot/feedback";
// }

export function useFeedbackStore() {
    //
    const { state, update } = useStore(feedbackStore);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendFeedback = async (feedback: Feedback) => {
        //
        if (isSubmitting) {
            return;
        }

        let existingFeedback = state.feedbacks[feedback.runId];

        try {
            if (existingFeedback) {
                //
                feedback = {
                    ...existingFeedback,
                    ...feedback,
                };
            }

            // optimistic update
            update((state) => {
                state.feedbacks[feedback.runId] = feedback;
            });

            const res = await fetch(endpoint, {
                method: "POST",
                body: JSON.stringify({
                    feedback,
                }),
            }).then((res) => res.json());

            feedback = {
                ...feedback,
                id: res.id,
            };

            console.log("Feedback response", res);

            update((state) => {
                state.feedbacks[feedback.runId] = feedback;
            });

            return { success: true, feedback };
        } catch (e) {
            //
            console.error(e);

            // rollback
            update((state) => {
                if (existingFeedback) {
                    state.feedbacks[feedback.runId] = existingFeedback;
                } else {
                    delete state.feedbacks[feedback.runId];
                }
            });

            return { success: false, error: e.message };
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        feedbacks: state.feedbacks,
        sendFeedback,
        isSubmitting,
    };
}
