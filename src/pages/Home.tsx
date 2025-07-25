import LargeText from "../components/2_LargeText";
import StandardText from "../components/3_StandardText";
import ScrollArrow from "../components/ScrollArrow";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  const isPortuguese = i18n.language === "pt" || i18n.language === "pt-br";

  return (
    <div id="home">
      <div className="relative flex h-screen flex-col items-center justify-center gap-4 bg-slate-500 dark:bg-slate-900">
        <StandardText>good evening, magistrate</StandardText>
        <code className="text-7xl text-slate-900 dark:text-slate-400">
          {"<Adriano Chamon/>"}
        </code>
        <LargeText>{t("home")}</LargeText>

        <a
          className="mt-4 border-2 p-2 text-2xl text-slate-900 transition duration-200 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-300 dark:text-slate-400"
          href={
            isPortuguese
              ? "Curriculo - Adriano Chamon Tavares.pdf"
              : "Curriculum - Adriano Chamon Tavares (ENGLISH).pdf"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {isPortuguese ? "download CV (pt-br)" : "download CV (en-us)"}
        </a>

        <div className="absolute bottom-24">
          <ScrollArrow />
        </div>
      </div>
    </div>
  );
}
