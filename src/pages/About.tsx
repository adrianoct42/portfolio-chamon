import { useTranslation } from "react-i18next";
import SmallText from "../components/4_SmallText";

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="bg-slate-500 dark:bg-slate-900">
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <code className="text-3xl text-slate-900 dark:text-slate-400">
          {"<!-- about me -->"}
        </code>
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          <div className="flex flex-col my-2 mx-2 gap-2 items-center justify-center">
            <img className="my-2 rounded-full w-64 h-64" src="foto.jpg" />
            <code className="bg-slate-600 dark:bg-slate-800 text-green-300 rounded my-2 p-8">
              <span className="text-fuchsia-500">const</span>
              {` profile_data = {`}
              <br />
              <span className="pl-4">
                name: <span className="text-yellow-300">"Adriano"</span>,
              </span>
              <br />
              <span className="pl-4">
                born: <span className="text-yellow-300">1996</span>,
              </span>
              <br />
              <span className="pl-4">
                home: <span className="text-yellow-300">"Minas Gerais"</span>,
              </span>
              <br />
              <span className="pl-4">
                specialty: <span className="text-yellow-300">front-end</span>,
              </span>
              <br />
              <span className="pl-4">
                likes:{" "}
                <span className="text-yellow-300">
                  ["videogames", "anime", "psychology", "volleyball", "cats",
                  "coffee", "beer"]
                </span>
              </span>
              <br />
              {`};`}
            </code>
          </div>
          <div className="m-4 font-poppins flex flex-col gap-4 items-center justify-center text-start">
            <SmallText>{t("aboutMe1")}</SmallText>
            <SmallText>{t("aboutMe2")}</SmallText>
            <SmallText>{t("aboutMe3")}</SmallText>
            <SmallText>{t("aboutMe4")}</SmallText>
          </div>
        </div>
      </div>
    </div>
  );
}
