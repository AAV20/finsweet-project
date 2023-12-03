import React from 'react'
import style from './header.module.css'
import logo1 from './headerimage/Logo.png'
import logo2 from './headerimage/Logo (1).png'
import logo3 from './headerimage/Logo (2).png'
import logo4 from './headerimage/Logo (3).png'
import logo5 from './headerimage/Logo (4).png'



export default function Clients() {
  return (
    <div className={style.headerClintsBlock} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.headerClintsContent}>
            <div className={style.clientsTitleBlock}>
                <span>Our Clients</span>
                <h4>We've Worked with</h4>
            </div>
            <img src={logo1} alt='logo1'/>
            <img src={logo2} alt='logo2'/>
            <img src={logo3} alt='logo3'/>
            <img src={logo4} alt='logo4'/>
            <img src={logo5} alt='logo5'/>
        </div>
    </div>
  )
}
