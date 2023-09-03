import React, { Component } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    const person = {
      avatar: "Foto.jpeg",
      name: "Luis Enrique Acosta Cassiani",
      profession: "FrontEnd Developer",
      Cel: "Telefono: 3017580349",
      Email: "Correo: luisacosta7470@gmail.com",
      address: "Barranquilla, Colombia.",
      languages:"Ingles: B1",
      profile: [
        {
          ProfileDescription:
            "Soy un estudiante de ingeniería de sistemas altamente motivado y apasionado por el aprendizaje constante. Con un sólido compromiso con el trabajo en equipo, he desarrollado habilidades colaborativas que me permiten contribuir de manera efectiva en proyectos multidisciplinarios. Mi enfoque en la mejora continua y la búsqueda de soluciones innovadoras me ha llevado a abrazar desafíos técnicos y a aprovechar nuevas tecnologías. Como futuro profesional en ingeniería de sistemas, aspiro a aplicar mi conocimiento y pasión para impulsar el progreso en el campo y contribuir al éxito de equipos y organizaciones.",
        },
      ],
      experience: [
        {
          jobTitle: "FrontEnd",
          company: "Pivvot",
          startDate: "2022",
          endDate: "2023",
          jobDescription:
            "Durante un año, tuve el privilegio de trabajar en Pivvot como desarrollador frontend, enfocándome en la creación de aplicaciones móviles con React y React Native. Esta experiencia me brindó una sólida base en el desarrollo de interfaces de usuario altamente funcionales y visualmente atractivas para dispositivos móviles. Trabajando en un entorno dinámico y orientado a proyectos, pude fortalecer mis habilidades de resolución de problemas y colaboración en equipo.",
        },
      ],
      education: [
        {
          degree: "Colegio",
          institution: "Instituto la Salle",
          startDate: "2016",
          endDate: "2019",
          description:
            "Durante mi tiempo en el colegio, me enfoqué en el rendimiento académico y desarrollé habilidades esenciales, incluyendo pensamiento crítico y resolución de problemas. Participé en actividades extracurriculares y adquirí una mentalidad de aprendizaje continuo.",
        },
        {
          degree: "Ingenieria de Sistemas",
          institution: "Universidad de la Costa",
          startDate: "2020",
          endDate: "En curso",
          description:
            "En la universidad, participé en actividades extracurriculares que enriquecieron mi formación. Mi tiempo en la universidad me brindó habilidades valiosas y una base sólida para mi carrera. Actualmente me encuentro en octavo semestre",
        },
      ],
      skills: [
        { name: "HTML5", percentage: "100%" },
        { name: "CSS", percentage: "100%" },
        { name: "JavaScript/React", percentage: "50%" },
        { name: "React Native", percentage: "20%" },
      ],
    };

    return (
      <header>
        <div className="wrapper">
          <div className="sidebar">
            <About
              name={person.name}
              avatar={person.avatar}
              profession={person.profession}
              Cel={person.Cel}
              Email={person.Email}
              address={person.address}
              languages={person.languages}
            />
          </div>

          <div className="content-wrapper">
            <div className="content">
              <Profile profile={person.profile} />
              <Experience experience={person.experience} />
              <Education education={person.education} />
              <Skills skills={person.skills} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
