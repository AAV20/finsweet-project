import React, { useEffect, useState } from 'react'
import style from './consulting.module.css'

export default function Consulting() {
    const [consimage, setConsImage]=useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/reOWVZ/dataconsultingimg')
        .then(respons => respons.json())
        .then(datacons => setConsImage(datacons))
    },[])
  return (
    <div className={style.consultingContainer}>
        <div className={style.consultingContent}>
            <div className={style.consultingImageBlock}>
                {
                    Boolean.length && consimage.map((consimg)=>(
                        <div className={style.developmentImageBlock} key={consimg.id}>
                            <img src={consimg.imagconsult} alt="img" />
                        </div>
                    ))
                }
            </div>
            <div className={style.consultingTextBlock}>
                <h4>Developoment</h4>
                <h3>Bring your ideas to reality with certified<br></br>team of developers, working with<br></br>latest technologies </h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
            </div>
        </div>
    </div>
  )
}
