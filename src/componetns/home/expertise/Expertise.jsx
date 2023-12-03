import React from 'react'
import style from './expertise.module.css'
import group1 from './expertImage/Group 1749.png'
import group2 from './expertImage/Group 1755.png'
import group3 from './expertImage/Group 1855.png'



export default function Expertise() {
  return (
    <div className={style.expertiseContainer} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.expertiseContent}>
            <div className={style.expertisetTitleBlock}>
                <h4>Our expertise</h4>
                <h2>We want to get local<br></br>identification in every<br></br>corner of the world in this<br></br>era of global citizenship</h2>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
            </div>
            <div className={style.threeMinBlocks}>
                <div className={style.block_1}>
                    <div className={style.flex_child}>
                        <img src={group1} alt="icon1" />
                        <div>
                            <h4>On Time Delivery</h4>
                            <p>Through True Rich Attended does no end it<br></br>his mother since real had half every him.</p>
                        </div>
                    </div>
                </div>
                <div className={style.block_1}>
                    <div className={style.flex_child}>
                        <img src={group2} alt="icon2" />
                        <div>
                            <h4>Best Quality</h4>
                            <p>Through True Rich Attended does no end it<br></br>his mother since real had half every him.</p>
                        </div>
                    </div>
                </div>
                <div className={style.block_1}>
                    <div className={style.flex_child}>
                        <img src={group3} alt="icon3" />
                        <div>
                            <h4>Support Assist</h4>
                            <p>Through True Rich Attended does no end it<br></br>his mother since real had half every him.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
