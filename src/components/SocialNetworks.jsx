import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {name: "linkedin", href: "https://www.linkedin.com/in/lucas-arag%C3%A3o-front-end/", icon: <FaLinkedin />},
    {name: "github", href: "https://github.com/Lucasholt124",  icon: <FaGithub />},
    {name: "instagram", href: "https://www.instagram.com/lucas_aragaotm/", icon: <FaInstagram />},
];

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href={network.href} target="_blank"  className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>;

}

export default SocialNetworks