import clsx from "clsx";
import React from "react";

import { type TextAreaProps } from "./interfaces";
import styles from "./TextArea.module.scss";

function TextArea({
  fullPadding = false,
  errorMessage,
  ...props
}: TextAreaProps) {
  return (
    <div data-testid="textarea-wrapper">
      <textarea
        data-testid="textarea"
        className={clsx(styles.textarea, {
          [styles.full_padding!]: fullPadding,
        })}
        {...props}
      />
      {errorMessage && (
        <span data-testid="error-message" className={styles.errorMessage}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default React.memo(TextArea);
