import { DarkModeToggle } from "../contexts/DarkModeToggle";
import { LanguageSelect } from "../contexts/LanguageSelect";
import NavText from "./NavText";

export default function Navbar() {
  return (
    <>
      <nav className="fixed px-12 right-0 left-0 z-100 flex h-16 py-5 items-center justify-between shadow-md bg-slate-500 dark:bg-slate-900">
        <NavText
          navigate="#home"
          className="text-slate-900 dark:text-slate-400"
        >
          @adrianochamon
        </NavText>
        <div className="flex items-center gap-12">
          <NavText navigate="#about">Sobre</NavText>
          <NavText navigate="#projects">Projetos</NavText>
          <NavText navigate="#skills">Habilidades</NavText>
          <NavText navigate="#contact">Contato</NavText>
          <DarkModeToggle />
          <LanguageSelect />
        </div>
      </nav>
    </>
  );
}
