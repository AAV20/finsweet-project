import React, { useEffect, useState } from 'react'
import style from './companypage.module.css'
import OurStory from '../ourstory/OurStory'
import Expertise from '../home/expertise/Expertise'
import Ourvision from '../ourvision/Ourvision'
import MeetOurTeam from '../meetourteam/MeetOurTeam'
import Subscribe from '../home/subscribe/Subscribe'


export default function CompanyPage() {
  const [companyimage, setCompanyImage]=useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/HK4jfG/datacompany')
        .then(respons => respons.json())
        .then(datacompany => setCompanyImage(datacompany))
    },[])
  return (
    <div className={style.ourstoryParetBlock} data-aos="fade-up"
    data-aos-duration="700">
      <div className={style.companypageContainer}>
          <div className={style.companypageContent}>
              <div className={style.companypageTextBlock}>
                  <h4>Company</h4>
                  <h2>Award-winning Company<br></br>seen and used by millions<br></br>around the world.</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
              </div>
              <div className={style.companypageImageParent}>
                {
                    Boolean.length && companyimage.map((companyimg)=>(
                        <div className={style.companypageImageBlock} key={companyimg.id}>
                          <img src={companyimg.imgcomp} alt="img" />
                        </div>
                    ))
                  }
              </div>
          </div>
      </div>
      <OurStory/>
      <Expertise/>
      <Ourvision/>
      <MeetOurTeam/>
      <Subscribe/>
    </div>
  )
}
