import React from 'react'
import style from './culture.module.css' 
import icns from './cultureicons/Culture Icon.png'
import icns5 from './cultureicons/Culture Icon (5).png'
import icns4 from './cultureicons/Culture Icon (4).png'
import icns3 from './cultureicons/Culture Icon (3).png'
import icns2 from './cultureicons/Culture Icon (2).png'
import icns1 from './cultureicons/Culture Icon (1).png'
import Subscribe from '../home/subscribe/Subscribe'


export default function Culture() {
  return (
    <div className={style.culture_Parent}>
        <div className={style.cultureContainer}>
            <div className={style.cultureContent}>
                <div className={style.cultureTextBlock}>
                    <h4>OUR WORK & CULTURE</h4>
                    <h3>Come and join a team of highly<br></br>skilled professionals.</h3>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                </div>
                <div className={style.cultureProfBlock}>
                    <div className={style.flex_parent_block}>
                        <div className={style.cultureProfChildrenBlock_1}>
                            <div className={style.cultureMiniBlock_1}>
                                <div className={style.position_blocks}>
                                    <img src={icns} alt="icn" />
                                    <div>
                                        <h4>Covid-19 insurance</h4>
                                        <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cultureMiniBlock_1}>
                                <div className={style.position_blocks}>
                                    <img src={icns1} alt="icn" />
                                    <div>
                                        <h4>Flexible working time</h4>
                                        <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cultureMiniBlock_1}>
                                <div className={style.position_blocks}>
                                    <img src={icns2} alt="icn" />
                                    <div>
                                        <h4>Work from home</h4>
                                        <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.cultureProfChildrenBlock_2}>
                            <div className={style.cultureMiniBlock_1}>
                                <div className={style.position_blocks}>
                                    <img src={icns3} alt="icn" />
                                    <div>
                                        <h4>Annual retreats</h4>
                                        <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cultureMiniBlock_1}>
                                <div className={style.position_blocks}>
                                    <img src={icns4} alt="icn" />
                                    <div>
                                        <h4>Learning stipend</h4>
                                        <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cultureMiniBlock_1}>
                                <div className={style.position_blocks}>
                                    <img src={icns5} alt="icn" />
                                    <div>
                                        <h4>Gym membership</h4>
                                        <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Subscribe/>
    </div>
  )
}
