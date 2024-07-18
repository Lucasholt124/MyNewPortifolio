import SocialNetworks from './SocialNetworks';

import Avatar from '../img/imagem.jpeg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import Currículo from '../img/Currículo LUCAS ARAGÃO 1.pdf';


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas Aragão" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={Currículo} download={"Currículo LUCAS ARAGÃO 1.pdf"} className="btn">
      Download currículo
      </a>



  </aside>
  );
};

export default Sidebar