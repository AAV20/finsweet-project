import React from 'react'
import style from './applynow.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function ApplyNow() {
  return (
    <div className={style.applynowContainer}>
        <div className={style.applynowContent}>
            <h3>Apply Now</h3>
            <div className={style.validationForm}>
                <div className={style.validationInputBlock_1}>
                    <input type="text"  placeholder='Name'/>
                    <input type="text" placeholder='Last Name'/>
                </div>
                <div className={style.validationInputBlock_2}>
                    <input type="email"  placeholder='Email id'/>
                    <input type="number" placeholder='Phone Number'/>
                </div>
            </div>
            <div className={style.MessageBlock}>
                <textarea style={{
                    width:'100%', 
                    border:'none',
                    resize:'none', 
                    background:'rgba(249, 249, 255, 1)',
                    height:'150px',
                    textIndent:'20px'
                }} 
                    placeholder='Why do you thing you are good fit for Ether?'>
                </textarea>
            </div>
            <div className={style.valid_Checked_Block}>
                <input type="checkbox" />
                <small>I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.</small>
            </div>
            <button>Submit Application <ArrowRightAltIcon/></button>
        </div>
    </div>
  )
}
