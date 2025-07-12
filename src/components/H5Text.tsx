import { type JSX, type ReactNode } from "react";

type H5TextProps = {
  children: ReactNode;
  styles: string;
};

export default function H5Text({ children, styles }: H5TextProps): JSX.Element {
  return (
    <h5 className={`${styles} text-xs text-zinc-800 dark:text-zinc-400`}>
      {children}
    </h5>
  );
}
