import clsx from "clsx";
import React from "react";

import { type SpinnerProps } from "./interfaces";
import styles from "./Spinner.module.scss";

function Spinner({ color = "white" }: SpinnerProps) {
  return (
    <span
      data-testid="spinner"
      className={clsx(styles.spinner, styles[`spinner__${color}`])}
    />
  );
}

export default React.memo(Spinner);
