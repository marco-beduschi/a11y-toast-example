import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const ARIA_DESCRIPTION_BY_VARIANT = {
  notice: "notice",
  warning: "warning",
  success: "success",
  error: "error",
};

function Toast({ id, variant = "notice", children }) {
  const { dismissToast } = React.useContext(ToastContext);

  const VariantIcon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <VariantIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{ARIA_DESCRIPTION_BY_VARIANT[variant]}</VisuallyHidden>{" "}
        - {children}
      </p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
