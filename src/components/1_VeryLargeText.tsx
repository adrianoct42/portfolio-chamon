import { type JSX, type ReactNode } from "react";

type VeryLargeTextProps = {
  children: ReactNode;
};

export default function VeryLargeText({
  children,
}: VeryLargeTextProps): JSX.Element {
  return (
    <h1 className="text-7xl text-slate-900 dark:text-slate-400">{children}</h1>
  );
}
