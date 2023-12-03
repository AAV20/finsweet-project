import React, { useEffect, useState } from 'react'
import style from './blogpage.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import postimg from './blogimg/Image 1 (1).png'
import postimg_2 from './blogimg/Image (35).png'
import postimg_3 from './blogimg/Image (36).png'
import RecentPost from '../recentpost/RecentPost';
import AllPosts from '../allposts/AllPosts';
import Subscribe from '../home/subscribe/Subscribe';
import { NavLink } from 'react-router-dom';



export default function BlogPage() {
    const [blogimage, setBlogimage]=useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/t9XTgs/datablogimg')
        .then(respons => respons.json())
        .then(blogdata => setBlogimage(blogdata))
    })
  return (
    <div className={style.blogpgeParent} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.blogpageContainer}>
            <div className={style.blogpageContent}>
                <div className={style.blogpageText_Image_Block}>
                    <h4>TREnding</h4>
                    <h2>Breaking the code How<br></br>did we build our Figma<br></br>plugin </h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
                    <NavLink className={style.readmoreLink} to='/blogpageinner'>Read More <ArrowRightAltIcon className={style.arrow}/></NavLink>
                    <div className={style.post}>
                        <div className={style.postImage}>
                            <img src={postimg} alt="img" />
                            <span>Andrew Jonson</span>
                        </div>
                        |
                        <small>Posted on 27th January 2021</small>
                    </div>
                    <div>
                        {
                            
                            blogimage.map((itam)=>(
                                <div className={style.api_Imaeg_Block} key={itam.id}>
                                    <img src={itam.blogimg} alt="img" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={style.posts_block_2}>
                    <div className={style.posts_block_2_Content}>
                        <div className={style.posts}>
                            <h4>Great design expectations<br></br>prejudice in digital products<br></br>in Next Year</h4>
                            <div className={style.name_Lastname}>
                                <img src={postimg} alt="img" />
                                <div>
                                    <h5>Andrew Jonson</h5>
                                    <span>Jan 19, 2021</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.posts}>
                            <h4>Great design expectations<br></br>prejudice in digital products<br></br>in Next Year</h4>
                            <div className={style.name_Lastname}>
                                    <img src={postimg_2} alt="img" />
                                    <div>
                                        <h5>Mathew Jasele</h5>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        <div className={style.posts}>
                            <h4>Great design expectations<br></br>prejudice in digital products<br></br>in Next Year</h4>
                            <div className={style.name_Lastname}>
                                <img src={postimg_3} alt="img" />
                                <div>
                                    <h5>Hussen Abakas</h5>
                                    <span>Jan 19, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RecentPost/>
        <AllPosts/>
        <Subscribe/>
    </div>
  )
}
