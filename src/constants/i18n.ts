import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  lng: savedLanguage || "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    pt: {
      translation: {
        home: "desenvolvedor front-end",
        aboutMe1:
          "Prazer, me chamo Adriano e sou um desenvolvedor front-end. Me satisfaz um bom trabalho, estou sempre a procura de me aprimorar no ramo da tecnologia, independente da stack!",
        aboutMe2:
          "Me graduei em Engenharia de Controle e Automação pela UFOP, mas foi aproximadamente em 2020 que comecei a estudar software com mais entusiasmo, me encontrando nessa área de fato por influência principalmente de pessoas próximas.",
        aboutMe3:
          "Minhas oportunidades até o momento foram mais focadas no front-end, principalmente com React e Flutter, onde sempre prezei pela qualidade das minhas entregas, boa comunicação e aprendizado. Estou, também, sempre interessado em abrangir meus conhecimentos para além do front-end.",
        aboutMe4:
          "Um grande fã de jogos eletrônicos, animação como um todo, jazz, meus gatos e um grande papo sobre a vida. Lembre-se, a resposta é 42. 🎒🌌🚀✨",
      },
    },
    en: {
      translation: {
        home: "front-end developer",
        aboutMe1:
          "Nice to meet you, my name is Adriano, and I'm a front-end developer. I find good work satisfying, and I'm always looking to improve my coding skills, regardless of the stack!",
        aboutMe2:
          "I graduated in Control Engineering at UFOP, but it wasn't until around 2020 that I began studying software with more enthusiasm, finding my way into this field mainly through the influence of people close to me.",
        aboutMe3:
          "My opportunities so far have been more focused on the front-end, mainly with React and Flutter, where I've always valued the quality of my code, good communication, and learning opportunities. I'm also always interested in expanding my knowledge beyond the front-end.",
        aboutMe4:
          "A big fan of video games, animation in general, jazz, my cats, and a great conversation about life. Remember, the answer is 42. 🎒🌌🚀✨",
      },
    },
  },
});
