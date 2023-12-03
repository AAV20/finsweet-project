import React, { useState } from 'react'
import style from './position.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';


export default function Position() {

    const [display, setDisplay] = useState(false)


    
  return (
    <div className={style.positionContainer}>
    {
        display &&
        <div className={style.positionContent}>
            <div className={style.block_1}>
                <div className={style.block_1_innerText}>
                    <h4>Full Stack Developer</h4>
                    <span className={style.work_description}>Bengaluru · Full Time </span>
                    <span>$10K - $18K · No equity </span>
                    <Link className={style.positionLink} to='/careerinner'>Apply Now <ArrowRightAltIcon className={style.rightArr}/></Link>
                </div>
            </div>
            <div className={style.block_1}>
                <div className={style.block_1_innerText}>
                    <h4>Full Stack Developer</h4>
                    <span className={style.work_description}>Bengaluru · Full Time </span>
                    <span>$10K - $18K · No equity </span>
                    <Link className={style.positionLink} to='/careerinner'>Apply Now <ArrowRightAltIcon className={style.rightArr}/></Link>
                </div>
            </div>
            <div className={style.block_1}>
                <div className={style.block_1_innerText}>
                    <h4>Full Stack Developer</h4>
                    <span className={style.work_description}>Bengaluru · Full Time </span>
                    <span>$10K - $18K · No equity </span>
                    <Link className={style.positionLink} to='/careerinner'>Apply Now <ArrowRightAltIcon className={style.rightArr}/></Link>
                </div>
            </div>
            <div className={style.block_1}>
                <div className={style.block_1_innerText}>
                    <h4>Full Stack Developer</h4>
                    <span className={style.work_description}>Bengaluru · Full Time </span>
                    <span>$10K - $18K · No equity </span>
                    <Link className={style.positionLink} to='/careerinner'>Apply Now <ArrowRightAltIcon className={style.rightArr}/></Link>
                </div>
            </div>
            <div className={style.block_1}>
                <div className={style.block_1_innerText}>
                    <h4>Full Stack Developer</h4>
                    <span className={style.work_description}>Bengaluru · Full Time </span>
                    <span>$10K - $18K · No equity </span>
                    <Link className={style.positionLink} to='/careerinner'>Apply Now <ArrowRightAltIcon className={style.rightArr}/></Link>
                </div>
            </div>
            <div className={style.block_1}>
                <div className={style.block_1_innerText}>
                    <h4>Full Stack Developer</h4>
                    <span className={style.work_description}>Bengaluru · Full Time </span>
                    <span>$10K - $18K · No equity </span>
                    <Link className={style.positionLink} to='/careerinner'>Apply Now <ArrowRightAltIcon className={style.rightArr}/></Link>
                </div>
            </div>
            <div className={style.block_1}>
                <div className={style.block_1_innerText}>
                    <h4>Full Stack Developer</h4>
                    <span className={style.work_description}>Bengaluru · Full Time </span>
                    <span>$10K - $18K · No equity </span>
                    <Link className={style.positionLink} to='/careerinner'>Apply Now <ArrowRightAltIcon className={style.rightArr}/></Link>
                </div>
            </div>
            <div className={style.block_1}>
                <div className={style.block_1_innerText}>
                    <h4>Full Stack Developer</h4>
                    <span className={style.work_description}>Bengaluru · Full Time </span>
                    <span>$10K - $18K · No equity </span>
                    <Link className={style.positionLink} to='/careerinner'>Apply Now <ArrowRightAltIcon className={style.rightArr}/></Link>
                </div>
            </div>
            <div className={style.block_1}>
                <div className={style.block_1_innerText}>
                    <h4>Full Stack Developer</h4>
                    <span className={style.work_description}>Bengaluru · Full Time </span>
                    <span>$10K - $18K · No equity </span>
                    <Link className={style.positionLink} to='/careerinner'>Apply Now <ArrowRightAltIcon className={style.rightArr}/></Link>
                </div>
            </div>
        </div>
                
    }
                
        <button className={style.openCloseBtn} onClick={()=> setDisplay(!display)}>{display ? 'close positions':'open positions'}</button>
    </div>
  )
}
