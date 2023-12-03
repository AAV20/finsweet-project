import React from 'react'
import style from './service.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import icn1 from './serviceimage/Icon Div (2).png'
import icn2 from './serviceimage/Icon Div.png'
import icn3 from './serviceimage/Icon Div (1).png'


export default function Service() {
  return (
    <div className={style.serviceContiner} data-aos="fade-up"
    data-aos-duration="700">
         <div className={style.serviceContent}>
            <div className={style.serviceTitleBlock}>
                <h4>Our Services</h4>
                <h2>We build software solutions<br></br>that solve client's business<br></br>challenges</h2>
                <button>Start a Project <ArrowRightAltIcon/></button>
            </div>
            <div className={style.type_of_serviceBlock}>
                <div className={style.type_of_Service}>
                    <div className={style.type_of_Service_Child}>
                        <img src={icn1} alt="icn1" />
                        <span>Testing Management</span>
                        <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                        <button>Read more <ArrowRightAltIcon/></button>
                    </div>
                </div>
                <div className={style.type_of_Service}>
                    <div className={style.type_of_Service_Child}>
                        <img src={icn2} alt="icn2" />
                        <span>Technical support</span>
                        <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                        <button>Read more <ArrowRightAltIcon/></button>
                    </div>
                </div>
                <div className={style.type_of_Service}>
                    <div className={style.type_of_Service_Child}>
                        <img src={icn3} alt="icn3" />
                        <span>Development</span>
                        <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                        <button>Read more <ArrowRightAltIcon/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
