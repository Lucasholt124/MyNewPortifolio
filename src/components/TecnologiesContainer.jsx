import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiSass,
  DiNodejsSmall,
  DiReact
} from 'react-icons/di'


import '../styles/components/tecnologiescontainer.sass'

const Tecnologies = [
  {id:"html", name: "HTML5", icon: <DiHtml5 />},
  {id:"css", name: "CSS3", icon: <DiCss3 />},
  {id:"js", name: "JavaScript", icon: < DiJsBadge />},
  {id:"sass", name: "Sass", icon: <DiSass />},
  {id:"node", name: "Node.js", icon: <DiNodejsSmall />},
  {id:"react", name: "React", icon: <DiReact />},
];
const TecnologiesContainer = () => {
  return <section className="tecnologies-container">
    <h2>Tecnologias</h2>
    <div className="tecnologes-grid">
      {Tecnologies.map((tech) =>(
        <div className="tecnology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="tecnology-info">
            <h3>{tech.name}</h3>
            <p>1 ano e 5 meses de experiência em programação Front-end Freelancer, trabalhando com essas tecnologias
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
}

export default TecnologiesContainer