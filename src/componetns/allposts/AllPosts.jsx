import React from 'react'
import style from './allposts.module.css'
import imgs from './allpostimg/Image (41).png'
import imgs2 from './allpostimg/Image (42).png'
import imgs3 from './allpostimg/Image (43).png'
import imgs4 from './allpostimg/Image (44).png'
import imgs5 from './allpostimg/Image (45).png'
import imgs6 from './allpostimg/Image (46).png'
import img from './allpostimg/Image 1 (1).png'


export default function AllPosts() {
  return (
    <div className={style.allpostsContainer} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.header}>
            <h2>All posts</h2>
        </div>
        <div className={style.allpostsContent}>
            <div className={style.allpostsFlexBlock}>
                <div className={style.allposts_1}>
                    <div className={style.allposts_1_innerText}>
                        <div>
                            <h4>We aim to attain the<br></br>greatest satisfaction for our<br></br>clients </h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className={style.postBlocks}>
                                <img className={style.innerimg} src={img} alt="img" />
                                <div>
                                    <h5>Andrew Jonson</h5>
                                    <span>Jan 19, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className={style.images} src={imgs} alt="img" />
                </div>
                <div className={style.allposts_2}>
                    <div className={style.allposts_1_innerText}>
                        <div>
                            <h4>We aim to attain the<br></br>greatest satisfaction for our<br></br>clients </h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className={style.postBlocks}>
                                <img className={style.innerimg} src={img} alt="img" />
                                <div>
                                    <h5>Andrew Jonson</h5>
                                    <span>Jan 19, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className={style.images} src={imgs2} alt="img" />
                </div>
                <div className={style.allposts_3}>
                    <div className={style.allposts_1_innerText}>
                        <div>
                            <h4>We aim to attain the<br></br>greatest satisfaction for our<br></br>clients </h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className={style.postBlocks}>
                                <img className={style.innerimg} src={img} alt="img" />
                                <div>
                                    <h5>Andrew Jonson</h5>
                                    <span>Jan 19, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className={style.images} src={imgs3} alt="img" />
                </div>
                <div className={style.allposts_4}>
                    <div className={style.allposts_1_innerText}>
                        <div>
                            <h4>We aim to attain the<br></br>greatest satisfaction for our<br></br>clients </h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className={style.postBlocks}>
                                <img className={style.innerimg} src={img} alt="img" />
                                <div>
                                    <h5>Andrew Jonson</h5>
                                    <span>Jan 19, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className={style.images} src={imgs4} alt="img" />
                </div>
                <div className={style.allposts_5}>
                    <div className={style.allposts_1_innerText}>
                        <div>
                            <h4>We aim to attain the<br></br>greatest satisfaction for our<br></br>clients </h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className={style.postBlocks}>
                                <img className={style.innerimg} src={img} alt="img" />
                                <div>
                                    <h5>Andrew Jonson</h5>
                                    <span>Jan 19, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className={style.images} src={imgs5} alt="img" />
                </div>
                <div className={style.allposts_6}>
                    <div className={style.allposts_1_innerText}>
                        <div>
                            <h4>We aim to attain the<br></br>greatest satisfaction for our<br></br>clients </h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className={style.postBlocks}>
                                <img className={style.innerimg} src={img} alt="img" />
                                <div>
                                    <h5>Andrew Jonson</h5>
                                    <span>Jan 19, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className={style.images} src={imgs6} alt="img" />
                </div>
            </div>
        </div>
    </div>
  )
}
