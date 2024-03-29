import movieappImage2 from "../../images/movieappImage2.jpg";
import ongImage from "../../images/ongImage.jpg";
import pbudgetImage from "../../images/pbudgetImage.jpg";
import gif from "../../images/detailsProjects/MovieApp/gif.gif";
import gifOng from "../../images/detailsProjects/ong/gif-ong.gif";
import gifpBudget from "../../images/detailsProjects/pbudget/pbudget.gif";
import gifPottery from "../../images/detailsProjects/Maquetahtml/gifPottery.gif";
import gifMarvelSearcher from "../../images/detailsProjects/MarvelSearcher/gifMarvelSearcher.gif";
import maquetaHtml from "../../images/detailsProjects/Maquetahtml/maquetaHtml.jpg";
import marvelSearcherImage1 from "../../images/detailsProjects/MarvelSearcher/marvelSearcherImage1.jpg";

export const projectsItems = [
  {
    id: 1,
    title: "Marvel Searcher",
    image: marvelSearcherImage1,
    gif: gifMarvelSearcher,
    overview:
      "Marvel Searcher te permitirá realizar búsquedas de personajes del universo Marvel y consultar por sus comics relacionados y detalles de los mismos. También podrás almacenar tus búsquedas favoritas.",
    technologies: "Para el desarrollo se utilizó ReactJS y Styled Components",
    moreDetails:
      "Proyecto final, Bootcamp desarrollo frontend LenioLabs - Julio 2023",
    repository: [
      { type: "", link: "https://github.com/eli-beg/marvelsearcher" },
    ],
    deploy: ["https://marvelsearcherapp.netlify.app/"],
  },
  {
    id: 2,
    title: "The Movie App",
    image: movieappImage2,
    gif: gif,
    overview:
      "Con The Movie App podrás consultar una de las bases de datos más extensas relacionadas con películas, shows de tv y actores. Encontrarás secciones y detalles de cada item seleccionado.",
    technologies:
      "Para el desarrollo se utilizó ReactJS y MaterialUI como framework visual",
    moreDetails: "Proyecto personal, práctica de aprendizaje. Nov - Dic 2022",
    repository: [
      { type: "", link: "https://github.com/eli-beg/marvelsearcher" },
    ],
    deploy: ["https://marvelsearcherapp.netlify.app/"],
  },
  {
    id: 3,
    title: "ONG Somos Más",
    image: ongImage,
    gif: gifOng,
    overview:
      "Desarrollo de sitio web para representar a una organización y sus requerimientos. Se integró backoffice para editar la web desde un usuario administrador",
    technologies:
      "Back-end: NodeJS, Express, MySQL, JSON web tokens. Front-end: ReactJS, Axios, Material UI. Testing back-end: Mocha, Chai. Se utilizó Jira para la administración de tareas, Gitflow y Scrum como metodologías de trabajo",
    moreDetails:
      "Proyecto grupal, Práctica Profesional en el marco de Alkemy Labs. Sept - Oct 2022",
    repository: [
      { type: "back", link: "https://github.com/alkemyTech/OT287-server" },
      { type: "front", link: "https://github.com/alkemyTech/OT287-client" },
    ],
    deploy: [],
  },
  {
    id: 4,
    title: "The pBudget App",
    image: pbudgetImage,
    gif: gifpBudget,
    overview:
      "Administrador de Presupuesto Personal. A través de tablas se muestra la información otorgada por el usuario, ingresos, egresos y su balance, con filtros y ordenamientos. Gráfico de categorías de egresos, login y registro de usuario ",
    technologies:
      "Back-end: NodeJS, Express, PostgreSQL. Front-end: ReactJS, MaterialUI y ChartJS",
    moreDetails:
      "Proyecto personal, práctica realizada para el ingreso a la aceleración FullStack de Alkemy. Jun - Agos 2022",
    repository: [
      { type: "", link: "https://github.com/eli-beg/personalbudget" },
    ],
    deploy: [],
  },
  {
    id: 5,
    title: "Maqueta Landing Page",
    image: maquetaHtml,
    gif: gifPottery,
    overview:
      "Maqueta realizada como práctica obligatoria de certificación de Diseño Web Responsive de freeCodeCamp.org. Enero 2023",
    technologies: "HTML, CSS",
    moreDetails: "",
    repository: [
      {
        type: "",
        link: "https://codesandbox.io/s/landing-page-freecodecamp-webresponsive-3jvbzg",
      },
    ],
    deploy: ["https://3jvbzg.csb.app/"],
  },
];
