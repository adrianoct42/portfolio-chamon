import { skills } from "../constants/skills";
import { Tooltip } from "react-tooltip";

export default function Skills() {
  return (
    <div id="skills" className="py-8 bg-slate-500 dark:bg-slate-900">
      <div className="flex flex-col items-center justify-center gap-4">
        <code className="pb-8 text-3xl text-slate-900 dark:text-slate-400">
          {"<!-- skills -->"}
        </code>

        <Tooltip
          id="skill-tooltip"
          className="z-50 !bg-neutral-800 !text-slate-300 !px-4 !py-2 !text-sm !rounded-lg !shadow-lg"
          place="top"
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="aspect-square p-4 text-6xl rounded-2xl flex items-center justify-center bg-slate-300 dark:bg-slate-700"
            >
              <div
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={`${skill.name}`}
                className="text-slate-900 dark:text-slate-400"
              >
                {skill.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
