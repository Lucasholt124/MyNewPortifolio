import {AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/InformationContainer.sass';


const InformationContainer = () => {
  return <section id='information'>
    <div className='info-card'>
        <AiFillPhone id='phone-icon'/>
    </div>
    <div>
        <h3>Telefone</h3>
        <p>(79)99938-3543</p>
    </div>
    <div className='info-card'>
        <AiOutlineMail id='email-icon'/>
    </div>
    <div>
        <h3>E-mail</h3>
        <p>Lucatavares@hotmail.com</p>
    </div>
    <div className='info-card'>
        <AiFillEnvironment id='pin-icon'/>
    </div>
    <div>
        <h3>Localização</h3>
        <p>Ribeirópolis / SE </p>
    </div>
  </section>
}

export default InformationContainer