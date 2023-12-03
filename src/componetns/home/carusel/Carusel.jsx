import React, { useEffect, useState,Children, cloneElement } from 'react'
import style from './carusel.module.css'
import men1 from './caruselimage/Image 3 (1).png'
import men2 from './caruselimage/Image 2 (1).png'
import men3 from './caruselimage/Image 1 (1).png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Carusel({children}) {
    const page_width = 500
    const [pages, setPages]= useState([])
    const [offset, setOffset]= useState(0)


    const handleLeftArrowClick = ()=>{
        setOffset((currentOffset)=>{
            const newOffset = currentOffset + page_width
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick=()=>{
        setOffset((currentOffset)=>{
            const newOffset = currentOffset - page_width
            const maxOffset = -(page_width * (pages.length-1))
            
            return Math.max(newOffset,maxOffset)
        })
    }
    useEffect(()=>{
    setPages(
        Children.map(children, (child) =>{
            return cloneElement(child,{
                style: {
                    height:'100%',
                    minWidth:`${page_width}px`,
                    maxWidth:`${page_width}px`,
                },
            })
        })
    )
    }, [])
  return (
    <div className={style.customersAndCaruselParent} data-aos="fade-right"
        data-aos-duration="700">
        <div className={style.contentBlock}>
            <div className={style.customersContainer}>
                <div className={style.customersContent}>
                    <div className={style.customersTitleBlock}>
                        <h2>Our customers love<br></br>what we do</h2>
                        <span>Transform your idea into reality with finsweet</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <div>
                            <img src={men1} alt="men1" />
                            <img src={men2} alt="men2" />
                            <img src={men3} alt="men3" />
                        </div>
                        <small>30+ Customer Reviews</small>
                    </div>
                </div>
            </div>
            <div className={style.main_container}>
                <ArrowBackIosNewIcon className={style.arrow} onClick={handleLeftArrowClick}/>
                <div className={style.window} >
                    <div className={style.all_pages_container}
                    style={{
                        transform:`translateX(${offset}px)`
                    }}
                    >
                        {pages}
                    </div>
                </div>
                <ArrowForwardIosIcon className={style.arrow} onClick={handleRightArrowClick}/>
            </div>
        </div>
    </div>
  )
}
