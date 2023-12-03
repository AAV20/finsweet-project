import React from 'react'
import style from './about.module.css'
import AboutImage from './AboutImage'



export default function AboutUs() {
  return (
    <div className={style.aboutContainer} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.aboutContent}>
            <div className={style.aboutTitleBlock}>
                <h4>ABOUT US</h4>
                <h2>The company leads entire<br></br>webdesign process from<br></br>concept to delivery.</h2>
            </div>

            <div className={style.aboutTechnologyBlock}>
                <h3>The Era Of Technology.</h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
            </div>
        </div>
        <AboutImage/>
    </div>
  )
}
