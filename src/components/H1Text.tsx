import { type JSX, type ReactNode } from "react";

type H1TextProps = {
  children: ReactNode;
};

export default function H1Text({ children }: H1TextProps): JSX.Element {
  return (
    <h1 className="text-7xl text-slate-900 dark:text-slate-400">{children}</h1>
  );
}
