import React from 'react'
import style from './subscribe.module.css'

export default function Subscribe() {
  return (
    <div className={style.subscribeContainer} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.subscribeContent}>
            <div className={style.subscribeTextBlock}>
                <h4>NEWSLETTER</h4>
                <h2>Subscribe our News Letter<br></br>to get Latest Updates.</h2>
            </div>
            <div className={style.subscribeInputBlock}>
                <form action="">
                    <label htmlFor="">
                        <input type="email" placeholder='Enter your email'/>
                    </label>
                </form>
            </div>
        </div>
    </div>
  )
}
