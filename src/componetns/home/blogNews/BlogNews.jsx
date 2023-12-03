import React, { useEffect, useState } from 'react'
import style from './blognews.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



export default function BlogNews() {
  const [bestimage, setBestimage] = useState([])
  const [brandimage, setBrandimage] = useState([])


  useEffect(()=>{
    fetch('https://retoolapi.dev/rzDz5T/datablog')
    .then(respons => respons.json())
    .then(dataimg => setBestimage(dataimg))
  },[])

  useEffect(()=>{
    fetch('https://retoolapi.dev/2UESSO/databrand')
    .then(respons => respons.json())
    .then(brandimg => setBrandimage(brandimg))
  })

  
  return (
    <div className={style.blognewsContainer} data-aos="fade-up"
    data-aos-duration="700">
      <div className={style.blognewsContent}>
        <div className={style.blognewsTitle}>
          <h2>Read our latest blogs & news</h2>
        </div>
        <div className={style.parentFlexBlock}>
          <div className={style.bestDesignBlock}>
            {
              Boolean.length && bestimage.map((itam)=>(
                <div className={style.bestDesignBlock} key={itam.id}>
                  <img src={itam.images} alt="img" />
                </div>
              ))
            }
            <div className={style.descriptionBlock}>
              <div className={style.descriptionTexts}>
                  <span>Jan 19, 2021</span>
                  <h4>Today’s best design<br></br>trends for digital<br></br>products</h4>
                  <button>Read More <ArrowRightAltIcon/></button>
              </div>
            </div>
          </div>
          <div className={style.brand_StrategyBlock}>
            {
              Boolean.length && brandimage.map((brand)=>(
                <div className={style.brand_ImageBlock} key={brand.id}>
                    <img src={brand.images} alt="img" />
                </div>
              ))
            }
            <div className={style.brand_StrategyText}>
                <div className={style.brand_DescrText}>
                  <span>Jan 19, 2021</span>
                  <h4>A practical guide to<br></br>building a brand<br></br>strategy</h4>
                  <button>Read More <ArrowRightAltIcon/></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
