import React, { useEffect, useState } from 'react'
import style from './infotech.module.css'

export default function InfoTechnology() {
    const [infotechimage, setInfoTechImage]=useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/B77DzQ/datainfotechimg')
        .then(respons => respons.json())
        .then(datainfotech => setInfoTechImage(datainfotech ))
    },[])
  return (
    <div className={style.infoTechnologyContainer}>
        <div className={style.infoTechnologyContent}>
            <div className={style.infoTechnologyTextBlock}>
                <h4>Developoment</h4>
                <h3>Bring your ideas to reality with certified<br></br>team of developers, working with<br></br>latest technologies </h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
            </div>
            <div className={style.infoTechnologyImageBlock}>
            {
                Boolean.length && infotechimage.map((infoimg)=>(
                    <div className={style.infoTechnologyImageBlock} key={infoimg.id}>
                        <img src={infoimg.imaginfotech} alt="img" />
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}
