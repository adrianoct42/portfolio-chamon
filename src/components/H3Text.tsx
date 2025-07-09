import { type JSX, type ReactNode } from "react";

type H3TextProps = {
  children: ReactNode;
};

export default function H3Text({ children }: H3TextProps): JSX.Element {
  return (
    <h3 className="text-2xl text-zinc-800 dark:text-zinc-400">{children}</h3>
  );
}
