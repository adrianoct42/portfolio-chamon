import { type ButtonHTMLAttributes, type JSX, type ReactNode } from "react";

type NavTextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function NavText({ children }: NavTextProps): JSX.Element {
  return (
    <h2 className="text-slate-700 transition duration-150 hover:underline dark:text-slate-300">
      {children}
    </h2>
  );
}
