import React, { useEffect, useState } from 'react'
import style from './about.module.css'
import shapers from './aboutimage/Shapes (1).png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function AboutImage() {
    const [imgGalery, setImageGalery]= useState([])

    useEffect(()=>{
      fetch('https://retoolapi.dev/qAd11H/imggalery')
      .then(res => res.json())
      .then(imgdata => setImageGalery(imgdata))
      .catch(console.log('image not faund'))
    },[])

  return (
    <div className={style.imageContainer} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.imageContent}>
            {
              imgGalery.length && imgGalery.map((galery)=>(
                <div className={style.galeryBlock} key={galery.id}>
                  <img src={galery.imggalery} alt='imgs'/>
                </div>
              ))
            }
        </div>
        <div className={style.companyTeam}>
            <div className={style.companyTeamParent}>
                <div className={style.companyTeamParent_childs}>
                    <div className={style.descriptionBlock}>
                      <div>
                        <span>1560+</span>
                        <img src={shapers} alt="" />
                      </div>
                      <h4>Project Delivered</h4>
                    </div>
                    <div className={style.descriptionBlock}>
                      <div>
                        <span>100+</span>
                        <img src={shapers} alt="" />
                      </div>
                      <h4>Professional</h4>
                    </div>
                    <div className={style.descriptionBlock}>
                      <div>
                        <span>950+</span>
                        <img src={shapers} alt="" />
                      </div>
                      <h4>Happy Client</h4>
                    </div>
                    <div className={style.descriptionBlock}>
                      <div>
                        <span>10 yrs</span>
                        <img src={shapers} alt="" />
                      </div>
                      <h4>Experience</h4>
                    </div>
                </div>
                <button className={style.descrAboutUs_Btn}>Read about us <ArrowRightAltIcon/></button>
            </div>
        </div>
    </div>
  )
}
