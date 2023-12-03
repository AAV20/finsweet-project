import React from 'react'
import style from './careerinner.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import WorkDescr from '../workdescription/WorkDescr';
import ApplyNow from '../applynow/ApplyNow';
import Subscribe from '../home/subscribe/Subscribe';



export default function CareerInnerpage() {
  return (
    <div className={style.carerrParentBlock} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.careerinnerContainer}>
            <div className={style.careerinnerContent}>
                <div className={style.workDescrBlock}>
                    <div className={style.careerinnerDescr_1}>
                        <h4>CAREER AT Ether</h4>
                        <h3>Full Stack Developer</h3>
                        <p>Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
                        <Link className={style.innerLink}>Apply Now <ArrowRightAltIcon className={style.arrowright}/></Link>
                    </div>
                    <div className={style.careerinnerDescr_2}>
                        <div className={style.job_Description}>
                        <div>
                            <h4>Job Description</h4>
                            <span>Remote, India , 4 to 5 Years Of Experience</span>
                            <span>Department: Product Engineering</span>
                            <span>Full Time 5 Position Available.</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <WorkDescr data-aos="fade-up"
    data-aos-duration="700"/>
       <ApplyNow data-aos="fade-up"
    data-aos-duration="700"/>
       <Subscribe data-aos="fade-up"
    data-aos-duration="700"/>
    </div>
  )
}
