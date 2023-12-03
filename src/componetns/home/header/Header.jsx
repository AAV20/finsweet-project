import React, { useEffect, useState } from 'react'
import style from './header.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Clients from './Clients';


export default function Header() {
 const [image, setImages] = useState([])

 useEffect(()=>{
    fetch('https://retoolapi.dev/jj9Eqv/dataimage')
    .then(respons => respons.json())
    .then(data => setImages(data))
 },[])
  return (
    <div className={style.headerContainer} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.headerContent}>
            <div className={style.contentChild}>
                <div className={style.headerTitleBlock}>
                    <h1>Transform Your<br></br>Idea Into Reality with<br></br>Finsweet</h1>
                    <p>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                    <button>Request Quote <ArrowRightAltIcon/></button>
                </div>
                {
                    image.map((img)=>(
                        <div className={style.hearerImageBlock} key={img.id}>
                            <img src={img.images} alt='oficeimg'/>
                        </div>
                    ))
                }
            </div>
        </div>
        <Clients/>
    </div>
  )
}
