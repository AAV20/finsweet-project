import style from './career.module.css'
import careerlogo from './careerimg/Image (33).png'
import Position from '../position/Position'
import Culture from '../culture/Culture'

export default function CareerPage() {
    
  return (
    <div className={style.careerParent} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.careerContainer}>
            <div className={style.careerContent}>
                <div className={style.careerTextBlock}>
                    <h4>CAREER AT FINSWEET</h4>
                    <h2>We hired people who are Always<br></br>Passionate about what they do</h2>
                    <p>Through True Rich Attended does no end it his mother since real had half<br></br>every him case in packages enquire we up ecstatic unsatiable saw .</p>
                </div>
                <div className={style.careerLogoBlock}>
                    <img src={careerlogo} alt="logo" />
                </div>
                <span>See Our open positions 👇</span>
            </div>
        </div>
        <Position data-aos="fade-up"
    data-aos-duration="700"/>
        <Culture data-aos="fade-up"
    data-aos-duration="700"/>
    </div>
  )
}
