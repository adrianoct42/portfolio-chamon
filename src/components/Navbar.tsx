import { DarkModeToggle } from "../contexts/DarkModeContext";
import NavText from "./NavText";

export default function Navbar() {
  return (
    <>
      <nav className="fixed px-6 right-0 left-0 z-50 flex h-20 items-center justify-between bg-slate-400 py-5 dark:bg-slate-900">
        <p className="text-slate-900 dark:text-slate-400">@adrianochamon</p>
        <div className="flex items-center gap-8">
          <NavText>Sobre</NavText>
          <NavText>Projetos</NavText>
          <NavText>Habilidades</NavText>
          <NavText>Contato</NavText>
          <DarkModeToggle />
        </div>
      </nav>
    </>
  );
}
