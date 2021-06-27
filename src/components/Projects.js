import Card from "./Card";
import React from "react";

const Projects = () => {
  const firstCard = {
    title: "Dirigible",
    subtitle: "Aplicación web para la planificación de vuelos.",
    image: "logo.png",
    color: "rgb(135, 206, 250)",
    link: "https://github.com/CarlosAlbaLopez/PlanificadorVuelos",
    technologies: {
      one: "REACT",
      two: "NODE.JS",
      three: "HTML / CSS",
    },
    imageWidth: "100%",
  };
  const secondCard = {
    title: "IVAPP303",
    subtitle:
      "Aplicación para dispositivos móviles que permite al usuario fotografíar documentos, consultar y generar reportes.",
    image: "icono303.png",
    color: "#8b1b9b",
    link: "https://github.com/CarlosAlbaLopez/IVAPP303",
    technologies: {
      one: "C#",
      two: "XAMARIN",
      three: "CSS",
    },
    imageWidth: "50%",
  };
  const thirdCard = {
    title: "Nómada Logística",
    subtitle: "Landing page para negocio local de portes y mudanzas.",
    image: "logo-completo.png",
    color: "#e95a00",
    link: "https://github.com/joseperezdmgz/mudanzas",
    technologies: {
      one: "HTML",
      two: "CSS",
      three: "JAVASCRIPT",
    },
    imageWidth: "100%",
  };

  return (
    <div className="projects-container">
      <a id="linktoprojects" href>
        proyectos
      </a>
      <Card
        title={firstCard.title}
        subtitle={firstCard.subtitle}
        image={firstCard.image}
        color={firstCard.color}
        link={firstCard.link}
        technologies={firstCard.technologies}
        imageWidth={firstCard.imageWidth}
      ></Card>
      <Card
        title={secondCard.title}
        subtitle={secondCard.subtitle}
        image={secondCard.image}
        color={secondCard.color}
        link={secondCard.link}
        technologies={secondCard.technologies}
        imageWidth={secondCard.imageWidth}
      ></Card>
      <Card
        title={thirdCard.title}
        subtitle={thirdCard.subtitle}
        image={thirdCard.image}
        color={thirdCard.color}
        link={thirdCard.link}
        technologies={thirdCard.technologies}
        imageWidth={thirdCard.imageWidth}
      ></Card>
    </div>
  );
};

export default Projects;
