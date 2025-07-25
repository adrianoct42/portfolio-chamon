import { type JSX, type ReactNode } from "react";

type LargeTextProps = {
  children: ReactNode;
};

export default function LargeText({ children }: LargeTextProps): JSX.Element {
  return (
    <h2 className="text-4xl text-slate-700 dark:text-slate-300">{children}</h2>
  );
}
