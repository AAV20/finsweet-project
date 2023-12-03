import React from 'react'
import AboutUs from './about/AboutUs'
import Expertise from './expertise/Expertise'
import Service from './services/Service'
import Process from './process/Process'
import Carusel from './carusel/Carusel'
import style from './carusel/carusel.module.css'
import menImage from './carusel/caruselimage/Image 3 (1).png'
import menImage_2 from './carusel/caruselimage/Image 2 (1).png'
import menImage_3 from './carusel/caruselimage/Image 1 (1).png'
import BlogNews from './blogNews/BlogNews'
import Subscribe from './subscribe/Subscribe'
import Header from './header/Header'



export default function Parent() {
  return (
    <div>
      <Header/>
      <AboutUs/>
      <Expertise/>
      <Service/>
      <Process/>
      <Carusel>
          <div className={style.slid_1}>
              <div className={style.slideText}>
                  <p>Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</p>
                  <div className={style.imageTextFlexBlock}>
                    <div>
                      <img src={menImage} alt='menImage'/>
                    </div>
                    <div className={style.imageDescrBlock}>
                        <h4>Johnny Andro</h4>
                        <span>Director, Company</span>
                    </div>
                  </div>
              </div>
          </div>
          <div className={style.slid_2}>
              <div className={style.slideText}>
                  <p>Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</p>
                  <div className={style.imageTextFlexBlock}>
                    <div>
                      <img src={menImage_2} alt='menImage'/>
                    </div>
                    <div className={style.imageDescrBlock}>
                        <h4>Kalyan Dro</h4>
                        <span>employee</span>
                    </div>
                  </div>
              </div>
          </div>
          <div className={style.slid_3}>
              <div className={style.slideText}>
                  <p>Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</p>
                  <div className={style.imageTextFlexBlock}>
                    <div>
                      <img src={menImage_3} alt='menImage'/>
                    </div>
                    <div className={style.imageDescrBlock}>
                        <h4>Jhon Doe</h4>
                        <span>employee</span>
                    </div>
                  </div>
              </div>
          </div>
      </Carusel>
      <BlogNews/>
      <Subscribe/>
    </div>
  )
}
