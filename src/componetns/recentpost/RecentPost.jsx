import React from 'react'
import style from './recentpost.module.css'
import img from './recentpostimg/Image 1 (1).png'
import img2 from './recentpostimg/Image (37).png'
import img3 from './recentpostimg/Image (38).png'
import img4 from './recentpostimg/Image (39).png'
import img5 from './recentpostimg/Image (40).png'



export default function RecentPost() {
  return (
    <div className={style.recentpostContainer} data-aos="fade-up"
    data-aos-duration="700">
      <h2>Read Recent Post</h2>
        <div className={style.recentpostContent}>
            <div className={style.recentpostFlexBlock}>
                <div className={style.recentpost_1}>
                    <div className={style.recentpost_1_innerText}>
                        <h4>Today’s best design<br></br>trends for digital<br></br>products</h4>
                        <div className={style.postBlock}>
                            <img src={img} alt="img" />
                            <div>
                                <h5>Andrew Jonson</h5>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                    <img src={img2} alt="img" />
                </div>
                <div className={style.recentpost_3}>
                    <div className={style.recentpost_1_innerText}>
                        <h4>Today’s best design<br></br>trends for digital<br></br>products</h4>
                        <div className={style.postBlock}>
                            <img src={img} alt="img" />
                            <div>
                                <h5>Andrew Jonson</h5>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                    <img src={img3} alt="img" />
                </div>
                <div className={style.recentpost_4}>
                    <div className={style.recentpost_1_innerText}>
                        <h4>Today’s best design<br></br>trends for digital<br></br>products</h4>
                        <div className={style.postBlock}>
                            <img src={img} alt="img" />
                            <div>
                                <h5>Andrew Jonson</h5>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                    <img src={img4} alt="img" />
                </div>
                <div className={style.recentpost_5}>
                    <div className={style.recentpost_1_innerText}>
                        <h4>Today’s best design<br></br>trends for digital<br></br>products</h4>
                        <div className={style.postBlock}>
                            <img src={img} alt="img" />
                            <div>
                                <h5>Andrew Jonson</h5>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                    <img src={img5} alt="img" />
                </div>
            </div>
        </div>
    </div>
  )
}
