import React, { useEffect, useState } from 'react'
import style from './azure.module.css'

export default function Azure() {
    const [azureimage, setAzureImage]=useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/ObkKBF/dataazureimg')
        .then(respons => respons.json())
        .then(dataazure => setAzureImage(dataazure))
    },[])
  return (
    <div className={style.azureContainer}>
        <div className={style.azureContent}>
            <div className={style.azureTextBlock}>
                <h4>Developoment</h4>
                <h3>Bring your ideas to reality with certified<br></br>team of developers, working with<br></br>latest technologies </h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
            </div>
            <div className={style.azureImageBlock}>
                {
                    Boolean.length && azureimage.map((azureimg)=>(
                        <div className={style.developmentImageBlock} key={azureimg.id}>
                            <img src={azureimg.imgazure} alt="img" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
