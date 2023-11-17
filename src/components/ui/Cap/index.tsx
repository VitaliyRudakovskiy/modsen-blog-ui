import clsx from "clsx";
import React from "react";

import styles from "./Cap.module.scss";
import { type CapProps } from "./interfaces";

export default function Cap({ children, weight = "regular" }: CapProps) {
  return (
    <p className={clsx(styles.cap, styles[`cap__${weight}`])}>{children}</p>
  );
}
