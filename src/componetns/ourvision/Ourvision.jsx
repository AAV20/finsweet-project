import React, { useEffect, useState } from 'react'
import style from './ourvision.module.css'

export default function Ourvision() {
    const [visionimage, setVisionImage]=useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/hFjtSA/datavision')
        .then(respons => respons.json())
        .then(datavision => setVisionImage(datavision))
    },[])
  return (
    <div className={style.ourvisionContainer}>
        <div className={style.ourvisionContent}>
            <div className={style.ourvisionTextBlock}>
                <h4>Our Vision</h4>
                <h3>We want to get local identification in<br></br>every corner of the world in this era of<br></br>global citizenship.</h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
            </div>
            <div className={style.visionImageParent}>
                {
                    Boolean.length && visionimage.map((visionimg)=>(
                        <div className={style.visionImageBlock} key={visionimg.id}>
                            <img src={visionimg.imgvision} alt="img" />
                        </div>
                    ))
                  }
              </div>
        </div>
    </div>
  )
}
