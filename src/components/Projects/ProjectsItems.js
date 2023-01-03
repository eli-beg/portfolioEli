import movieappImage2 from "../../images/movieappImage2.jpg";
import ongImage from "../../images/ongImage.jpg";
import pbudgetImage from "../../images/pbudgetImage.jpg";
import gif from "../../images/detailsProjects/MovieApp/gif.gif";
import gifOng from "../../images/detailsProjects/ong/gif-ong.gif";
import gifpBudget from "../../images/detailsProjects/pbudget/pbudget.gif";

export const projectsItems = [
  {
    id: 1,
    title: "The Movie App",
    image: movieappImage2,
    gif: gif,
    overview:
      "Con The Movie App podrás consultar una de las bases de datos más extensas relacionadas con películas, shows de tv y actores. Encontrarás secciones y detalles de cada item seleccionado.",
    technologies:
      "Para el desarrollo se utilizó ReactJS y MaterialUI como framework visual",
    moreDetails: "Proyecto personal, práctica de aprendizaje. Nov - Dic 2022",
    repository: ["https://github.com/eli-beg/theMovieApp"],
    deploy: ["https://themovieappdb.netlify.app/"],
  },
  {
    id: 2,
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
      "https://github.com/alkemyTech/OT287-server",
      "https://github.com/alkemyTech/OT287-client",
    ],
    deploy: [],
  },
  {
    id: 3,
    title: "The pBudget App",
    image: pbudgetImage,
    gif: gifpBudget,
    overview:
      "Administrador de Presupuesto Personal. A través de tablas se muestra la información otorgada por el usuario, ingresos, egresos y su balance, con filtros y ordenamientos. Gráfico de categorías de egresos, login y registro de usuario ",
    technologies:
      "Back-end: NodeJS, Express, PostgreSQL. Front-end: ReactJS, MaterialUI y ChartJS",
    moreDetails:
      "Proyecto personal, práctica realizada para el ingreso a la aceleración FullStack de Alkemy. Jun - Agos 2022",
    repository: ["https://github.com/eli-beg/personalbudget"],
    deploy: [],
  },
];
