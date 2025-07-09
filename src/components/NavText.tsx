import { type JSX, type ReactNode } from "react";

type NavTextProps = {
  children: ReactNode;
  className?: string;
  navigate: string;
};

export default function NavText({
  children,
  className = "",
  navigate,
}: NavTextProps): JSX.Element {
  return (
    <a
      href={`${navigate}`}
      className={`text-slate-700 transition duration-150 hover:underline dark:text-slate-300 ${className}`}
    >
      {children}
    </a>
  );
}
