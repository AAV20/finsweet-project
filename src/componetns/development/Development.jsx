import React, { useState , useEffect} from 'react'
import style from './development.module.css'

export default function Development() {
    const [devimage, setDevImage]=useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/ytsXwY/datadevimg')
        .then(respons => respons.json())
        .then(datadev => setDevImage(datadev))
    },[])
  return (
    <div className={style.developmentContainer}>
        <div className={style.developmentContent}>
            <div className={style.developmentImageBlock}>
                {
                    Boolean.length && devimage.map((devimg)=>(
                        <div className={style.developmentImageBlock} key={devimg.id}>
                            <img src={devimg.images} alt="img" />
                        </div>
                    ))
                }
            </div>
            <div className={style.developmentTextBlock}>
                <h4>Developoment</h4>
                <h3>Bring your ideas to reality with certified<br></br>team of developers, working with<br></br>latest technologies </h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
            </div>
        </div>
    </div>
  )
}
