import React from 'react'
import style from './workdescr.module.css'
import { Link } from 'react-router-dom'

export default function WorkDescr() {
  return (
    <div className={style.worcdescrContainer}>
        <div className={style.worcdescrContent}>
            <div className={style.headerBlock}>
                <ul>
                <Link className={style.descriptionLink}>Details</Link>
                <Link className={style.descriptionLink}>Requirements</Link>
                <Link className={style.descriptionLink}>Responsibilities</Link>
                </ul>
            </div>
            <div className={style.line}></div>
            <div className={style.descriptionText}>
                <ul>
                    <li>Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).</li>
                    <li>Design & Create highly engaging industry-related content in both photo, gif & video format</li>
                    <li>Publish Posts on various social media channels</li>
                    <li>Promote content on social networks and monitor engagement (e.g. comments and shares)</li>
                    <li>Research industry-related topics</li>
                    <li>Editing audio and sound design on projects</li>
                    <li>Engage in opportunities to develop original content and concepts for web and mobile</li>
                    <li>Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.</li>
                    <li>Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}
