import React, { useEffect, useState } from 'react'
import style from './teampage.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import BlogNews from '../home/blogNews/BlogNews';

export default function TeamPage() {
    const [personimg, setPersonImg]= useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/uwDTxM/datapersonimg')
        .then(respons => respons.json())
        .then(persondata => setPersonImg(persondata) )

    })
  return (
    <div className={style.teampageParentBlock}>
        <div className={style.teampageContainer}>
            <div className={style.teampageContent}>
                <div className={style.person_info_Block}>
                    {
                        personimg.map((itam)=>(
                            <div className={style.personimage} key={itam.id}>
                                <img src={itam.personimg} alt="img" />
                            </div>
                        ))
                    }
                    <h3>Javena Melo</h3>
                    <span>CEO</span>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
                    <div className={style.socialLinks}>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <InstagramIcon/>
                    </div>
                </div>
            </div>
        </div>
        <BlogNews/>
    </div>

  )
}
