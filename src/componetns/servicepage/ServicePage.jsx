import React from 'react'
import style from './servicePage.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { NavLink } from 'react-router-dom';
import Process from '../home/process/Process';
import TechnicalSupport from '../technicalSupport/TechnicalSupport';
import Development from '../development/Development';
import Azure from '../azure/Azure';
import Consulting from '../consulting/Consulting';
import InfoTechnology from '../infoTechnology/InfoTechnology';
import Subscribe from '../home/subscribe/Subscribe';




export default function ServicePage() {
  return (
    <div className={style.ServicePageParentBlock}  data-aos="fade-up">
        <div className={style.serviceHeaderBlock}>
            <div className={style.serviceHeaderContent}>
                <div className={style.serviceContentflexBlock}>
                    <div className={style.serviceContent_1}>
                        <h4>Our Services</h4>
                        <h2>We Build Software<br></br>Solutionthat Solve Clients<br></br>Business Challenges</h2>
                        <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
                        <button>Request A Quote <ArrowRightAltIcon/></button>
                    </div>
                    <div className={style.serviceContent_2}>
                        <ul>
                            <NavLink className={style.serviceLinks}>Technical support</NavLink>
                            <NavLink className={style.serviceLink}>Development <ArrowRightAltIcon className={style.arrRight}/></NavLink>
                            <NavLink className={style.serviceLinks}>AWS/Azure </NavLink>
                            <NavLink className={style.serviceLinks}>Consulting</NavLink>
                            <NavLink className={style.serviceLinks}>Information Technology</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Process  data-aos="fade-up"/>
        <TechnicalSupport  data-aos="fade-up"/>
        <Development  data-aos="fade-up"/>
        <Azure  data-aos="fade-up"/>
        <Consulting  data-aos="fade-up"/>
        <InfoTechnology  data-aos="fade-up"/>
        <Subscribe  data-aos="fade-up"/>
    </div>
  )
}
