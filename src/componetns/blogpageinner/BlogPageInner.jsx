import React from 'react'
import style from './blogpageinner.module.css'
import bloginnerimg from './bloginnerimg/Image 1 (1).png'
import DigitalAgency from '../digitalAgency/DigitalAgency'
import Subscribe from '../home/subscribe/Subscribe'

export default function BlogPageInner() {
  return (
    <div className={style.blogpageinnerParentBlock} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.blogpageinnerContainer}>
            <div className={style.blogpageinnerContent}>
                <div className={style.blogpageText_Image_Block}>
                    <h2>Breaking the code How<br></br>did we build our Figma<br></br>plugin </h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
                    <div className={style.post}>
                        <div className={style.postImage}>
                            <img src={bloginnerimg} alt="img" />
                            <span>Andrew Jonson</span>
                        </div>
                        |
                        <small>Posted on 27th January 2021</small>
                    </div>
                </div>
            </div>
        </div>
        <DigitalAgency data-aos="fade-up"
    data-aos-duration="700"/>
        <Subscribe data-aos="fade-up"
    data-aos-duration="700"/>
    </div>
  )
}
