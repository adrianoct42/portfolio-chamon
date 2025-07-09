import { DarkModeToggle } from "../contexts/DarkModeToggle";
import NavText from "./NavText";

export default function Navbar() {
  return (
    <>
      <nav className="fixed px-12 right-0 left-0 z-50 flex h-20 items-center justify-between bg-slate-400 py-5 dark:bg-slate-900">
        <NavText navigate="#home" className="text-slate-900">
          @adrianochamon
        </NavText>
        <div className="flex items-center gap-12">
          <NavText navigate="#about">Sobre</NavText>
          <NavText navigate="#projects">Projetos</NavText>
          <NavText navigate="#skills">Habilidades</NavText>
          <NavText navigate="#contact">Contato</NavText>
          <DarkModeToggle />
        </div>
      </nav>
    </>
  );
}
