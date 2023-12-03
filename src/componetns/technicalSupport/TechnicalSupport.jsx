import React, { useEffect, useState } from 'react'
import style from './techsupport.module.css'

export default function TechnicalSupport() {
    const [techimage, setTechImage]=useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/6aqldK/datatechimg')
        .then(respons => respons.json())
        .then(datatech => setTechImage(datatech))
    },[])

  return (
    <div className={style.technicalContainer}>
        <div className={style.technicalContent}>
            <div className={style.technicalTextBlock}>
                <h4>Technical Support</h4>
                <h3>Best in class tech support for<br></br>your company. We become your tech<br></br>backbone </h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
            </div>
            <div className={style.technicalImageBlock}>
                {
                    Boolean.length && techimage.map((image)=>(
                        <div className={style.technicalImageBlock} key={image.id}>
                            <img src={image.imgs} alt="img" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
