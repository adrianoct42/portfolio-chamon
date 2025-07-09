import H2Text from "../components/H2Text";
import H3Text from "../components/H3Text";
import ScrollArrow from "../components/ScrollArrow";

export default function Home() {
  return (
    <div id="home">
      <div className="relative flex h-screen flex-col items-center justify-center gap-4 bg-slate-400 dark:bg-slate-900">
        <H3Text>good evening, magistrate</H3Text>
        <code className="text-7xl text-slate-900 dark:text-slate-400">
          {"<Adriano Chamon/>"}
        </code>
        <H2Text>desenvolvedor front-end</H2Text>
        <button className="mt-4 border-2 p-2 text-2xl text-slate-900 transition duration-200 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-300 dark:text-slate-400">
          download CV
        </button>
        <div className="absolute bottom-24">
          <ScrollArrow />
        </div>
      </div>
    </div>
  );
}
