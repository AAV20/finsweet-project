import React from 'react'
import style from './process.module.css'
import icon1 from './processimage/Icon Div (3).png'
import icon2 from './processimage/Icon Div (4).png'
import icon3 from './processimage/Icon Div (5).png'
import icon4 from './processimage/Icon Div (6).png'
import icon5 from './processimage/Icon Div (7).png'
import icon6 from './processimage/Icon Div (8).png'



export default function Process() {
  return (
    <div className={style.processContainer} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.processContent}>
            <div className={style.processTitleBlock}>
                <h4>Our Process</h4>
                <h2>The process we are working<br></br>With Our client Worldwide</h2>
                <p>Through True Rich Attended does no end it his mother since real had half<br></br>every him case in packages enquire we up ecstatic unsatiable.</p>
            </div>
            <div className={style.processDescriptionBlock}>
                <div className={style.processDescrMinBlocks}>
                  <img src={icon1} alt="icon1" />
                  <div className={style.flexcChildBlock}>
                    <h4>Discover</h4>
                    <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                  </div>
                  <span>0.1</span>
                </div>
                <div className={style.processDescrMinBlocks}>
                    <img src={icon2} alt="icon2" />
                    <div className={style.flexcChildBlock}>
                      <h4>Designing</h4>
                      <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                    </div>
                  <span>0.2</span>
                </div>
                <div className={style.processDescrMinBlocks}>
                    <img src={icon3} alt="icon3" />
                    <div className={style.flexcChildBlock}>
                      <h4>Development</h4>
                      <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                    </div>
                  <span>0.3</span>
                </div>
                <div className={style.processDescrMinBlocks}>
                    <img src={icon4} alt="icon4" />
                    <div className={style.flexcChildBlock}>
                      <h4>Testing</h4>
                      <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                    </div>
                  <span>0.4</span>
                </div>
                <div className={style.processDescrMinBlocks}>
                  <img src={icon5} alt="icon5" />
                    <div className={style.flexcChildBlock}>
                      <h4>Deployment</h4>
                      <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                    </div>
                  <span>0.5</span>
                </div>
                <div className={style.processDescrMinBlocks}>
                    <img src={icon6} alt="icon6" />
                    <div className={style.flexcChildBlock}>
                      <h4>Maintenance</h4>
                      <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                    </div>
                  <span>0.6</span>
                </div>
            </div>
        </div>
    </div>
  )
}
