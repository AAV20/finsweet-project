import React, { useEffect, useState } from 'react'
import style from './team.module.css'
import { NavLink } from 'react-router-dom'

export default function MeetOurTeam() {
    const [teamimage, setTeamImage]=useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/h9FTTj/datateam')
        .then(respons => respons.json())
        .then(datateam => setTeamImage(datateam))
    },[])
  return (
    <div className={style.ourteamContainer} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.ourteamContent}>
            <div className={style.ourteamTextBlock}>
                <h4>MEET OUR TEAM</h4>
                <h3>Teamwork is the only<br></br>way we work </h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
            </div>
            <div className={style.teamImageBlock}>
                {
                    Boolean.length && teamimage.map((teamimg)=>(
                        <div className={style.companypageImageBlock} key={teamimg.id}>
                            <NavLink className={style.companyImageLink} to='/teampage'><img src={teamimg.imgteam} alt="img" /></NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
