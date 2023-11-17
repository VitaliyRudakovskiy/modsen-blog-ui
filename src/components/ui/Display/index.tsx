import clsx from "clsx";
import React from "react";

import styles from "./Display.module.scss";
import { type DisplayProps } from "./interfaces";

export default function Display({ children, font = "sen" }: DisplayProps) {
  return (
    <h1 className={clsx(styles.display, styles[`display__${font}`])}>
      {children}
    </h1>
  );
}
