import { type JSX, type ReactNode } from "react";

type H2TextProps = {
  children: ReactNode;
};

export default function H2Text({ children }: H2TextProps): JSX.Element {
  return (
    <h2 className="text-4xl text-slate-700 dark:text-slate-300">{children}</h2>
  );
}
