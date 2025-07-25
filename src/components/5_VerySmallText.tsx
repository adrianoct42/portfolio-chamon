import { type JSX, type ReactNode } from "react";

type VerySmallTextProps = {
  children: ReactNode;
  styles: string;
};

export default function VerySmallText({
  children,
  styles,
}: VerySmallTextProps): JSX.Element {
  return (
    <h5 className={`${styles} text-xs text-zinc-800 dark:text-zinc-400`}>
      {children}
    </h5>
  );
}
