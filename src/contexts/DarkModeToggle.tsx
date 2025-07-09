import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="bg-blue rounded-full bg-slate-300 p-3 transition duration-150 dark:bg-slate-700"
    >
      {isDark ? (
        <Sun size={20} color="white" />
      ) : (
        <Moon size={20} color="black" />
      )}
    </button>
  );
}
