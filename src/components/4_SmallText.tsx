import { type JSX, type ReactNode } from "react";

type SmallTextProps = {
  children: ReactNode;
};

export default function SmallText({ children }: SmallTextProps): JSX.Element {
  return <h4 className="text-zinc-800 dark:text-zinc-400">{children}</h4>;
}
