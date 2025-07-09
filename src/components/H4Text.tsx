import { type JSX, type ReactNode } from "react";

type H4TextProps = {
  children: ReactNode;
};

export default function H4Text({ children }: H4TextProps): JSX.Element {
  return <h4 className="text-zinc-800 dark:text-zinc-400">{children}</h4>;
}
