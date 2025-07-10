import H4Text from "../components/H4Text";

export default function About() {
  return (
    <div id="about" className="bg-slate-400 dark:bg-slate-900">
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
                  ["videogames", "anime", "volleyball", "cats", "coffee",
                  "beer"]
                </span>
              </span>
              <br />
              {`};`}
            </code>
          </div>
          <div className="m-4 font-poppins flex flex-col gap-2 items-center justify-center">
            <H4Text>
              Prazer, me chamo Adriano e sou um desenvolvedor front-end. Me
              satisfaz um bom trabalho, estou sempre a procura de me aprimorar
              no ramo da tecnologia, independente da stack!
            </H4Text>
            <H4Text>
              Me graduei em Engenharia de Controle e Automação pela UFOP, mas
              foi aproximadamente em 2020 que comecei a estudar software com
              mais entusiasmo, me encontrando nessa área de fato por influência
              principalmente de pessoas próximas.
            </H4Text>
            <H4Text>
              Minhas oportunidades até o momento foram mais focadas no
              front-end, principalmente com React e Flutter, onde sempre prezei
              pela qualidade das minhas entregas, boa comunicação e aprendizado.
              Estou, também, sempre interessado em abrangir meus conhecimentos
              para além do front-end.
            </H4Text>
            <H4Text>
              Um grande fã de jogos eletrônicos, animação como um todo, jazz,
              meus gatos e um grande papo sobre a vida. Lembre-se, a resposta é
              42. 🎒🌌🚀✨
            </H4Text>
          </div>
        </div>
      </div>
    </div>
  );
}
