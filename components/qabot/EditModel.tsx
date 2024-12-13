import styles from "./styles.module.scss";
import { useAdminStore, LLM, LLMS, disabledModels } from "./adminStore";

export function EditModel() {
    //

    const { state, update } = useAdminStore();

    return (
        <select
            className={styles.modelSelect}
            value={state.model}
            onChange={(e) => {
                //
                update((s) => {
                    s.model = e.target.value as LLM;
                });
            }}
        >
            {Object.keys(LLMS).map((m) => {
                //
                return (
                    <optgroup key={m} label={m}>
                        {Object.values(LLMS[m]).map((model: string) => {
                            return (
                                <option
                                    key={model}
                                    value={model}
                                    disabled={disabledModels[model]}
                                >
                                    {model}
                                </option>
                            );
                        })}
                    </optgroup>
                );
            })}
        </select>
    );
}
