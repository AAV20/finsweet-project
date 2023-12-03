import React from 'react'
import style from './ourstory.module.css'
import shapers from './ourstoryimage/Shapes (1).png'
import logo1 from './ourstoryimage/Logo (5).png'
import logo2 from './ourstoryimage/Logo (6).png'
import logo3 from './ourstoryimage/Logo (7).png'
import logo4 from './ourstoryimage/Logo (8).png'
import logo5 from './ourstoryimage/Logo (9).png'



export default function OurStory() {
  return (
    <div>
    <div className={style.ourstoryContainer}>
        <div className={style.ourstoryContent}>
            <div className={style.ourstoryTextBlock}>
                <h4>Our Story 👇 </h4>
                <h3>From Startups to Titans of<br></br>Industry</h3>
                <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
            </div>
            <div className={style.companyStoryBlock}>
                <div className={style.companyTeamParent_childs}>
                        <div className={style.innerFlexContent_1}>
                            <div className={style.descriptionBlock}>
                            <div>
                                <span>1560+</span>
                                <img src={shapers} alt="img" />
                            </div>
                            <h4>Project Delivered</h4>
                            </div>
                            <div className={style.descriptionBlock}>
                            <div>
                                <span>100+</span>
                                <img src={shapers} alt="img" />
                            </div>
                            <h4>Professional</h4>
                            </div>
                        </div>
                        <div className={style.innerFlexContent_2}>
                            <div className={style.descriptionBlock}>
                            <div>
                                <span>950+</span>
                                <img src={shapers} alt="img" />
                            </div>
                            <h4>Happy Client</h4>
                            </div>
                            <div className={style.descriptionBlock}>
                            <div>
                                <span>10 yrs</span>
                                <img src={shapers} alt="img" />
                            </div>
                            <h4>Experience</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.logoBlock}>
            <div className={style.logoBlockContent}>
                <img src={logo1} alt='logo1'/>
                <img src={logo2} alt='logo2'/>
                <img src={logo3} alt='logo3'/>
                <img src={logo4} alt='logo4'/>
                <img src={logo5} alt='logo5'/>
            </div>
        </div>
    </div>

  )
}
