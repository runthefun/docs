import ReactDOM from "react-dom";
import styles from "./styles.module.scss";

export function Modal({ children, style = {}, onClose }) {
    //
    const portal = (
        <>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.modal} style={style}>
                {children}
            </div>
        </>
    );

    return portal;
}
