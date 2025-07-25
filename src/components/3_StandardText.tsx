import { type JSX, type ReactNode } from "react";

type StandardTextProps = {
  children: ReactNode;
};

export default function StandardText({
  children,
}: StandardTextProps): JSX.Element {
  return (
    <h3 className="text-2xl text-zinc-800 dark:text-zinc-400">{children}</h3>
  );
}
