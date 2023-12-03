import React from 'react'
import style from './footer.module.css'
import { NavLink } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className={style.footerContainer} data-aos="fade-up"
    data-aos-duration="700">
        <div className={style.footerContent}>
            <div className={style.footerTitleBlock}>
                <h2>Let's make<br></br>something special</h2>
                <h3>Let's talk! 🤙 </h3>
                <span>020 7993 2905</span>
                <p>hi@finsweet.com</p>
                <hr></hr>
            </div>
            <div className={style.footerServiceBlock}>
                <div className={style.footerLinks}>
                  <NavLink className={style.links} to='/'>Home</NavLink>
                  <NavLink className={style.links} to='/servicepage'>Service</NavLink>
                  <NavLink className={style.links} to='/company'>Company</NavLink>
                  <NavLink className={style.links} to='/careerpage'>Career </NavLink>
                  <NavLink className={style.links}>News</NavLink>
                </div>
                <div className={style.serviceContent}>
                    <h4>Service</h4>
                    <NavLink className={style.links}>Technical support</NavLink>
                    <NavLink className={style.links}>Testing</NavLink>
                    <NavLink className={style.links}>Development</NavLink>
                    <NavLink className={style.links}>AWS/Azure </NavLink>
                    <NavLink className={style.links}>Consulting</NavLink>
                    <NavLink className={style.links}>Information Technology</NavLink>
                </div>
                <div className={style.resoursesContent}>
                    <h4>Resourses</h4>
                    <NavLink className={style.links}>About Us</NavLink>
                    <NavLink className={style.links}>Testimonial</NavLink>
                    <NavLink className={style.links}>Privacy Policy</NavLink>
                    <NavLink className={style.links}>Terms of use</NavLink>
                    <NavLink className={style.links}>Blog</NavLink>
                </div>
            </div>
        </div>
          <div className={style.footer_button_Small_Text}>
              <small>DLF Cybercity, Bhubaneswar,<br></br>India, &52050</small>
              <NavLink to='/contactUs' className={style.footerLinkContactUs}>Contact Us <ArrowRightAltIcon/></NavLink>
          </div>
          <div className={style.footer_Social_Block}>
              <div className={style.socialContent}>
                <div className={style.footer_Logo}>
                <svg width="120" height="25" viewBox="0 0 120 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_201_278)">
                  <path d="M119.787 18.5621V21.5317H117.296C114.638 21.4481 113.218 20.0127 113.218 17.3165V10.5342H111.479V7.92915H113.218V5.0127H116.894V7.89877H119.704V10.4962H116.894V16.9519C116.894 17.8254 117.068 18.5241 118.413 18.5241L119.787 18.5621Z" fill="#232536"/>
                  <path d="M96.8282 14.7569V14.5594C96.7884 13.6859 96.9214 12.8131 97.2196 11.9911C97.5178 11.1691 97.9753 10.414 98.5658 9.76912C99.1564 9.12424 99.8684 8.60225 100.661 8.23306C101.454 7.86387 102.311 7.65475 103.185 7.61768C103.36 7.61768 103.542 7.61768 103.717 7.61768C107.188 7.61768 110.233 9.63793 110.233 14.4531V15.4784H100.588C100.686 17.6962 101.886 18.9493 103.907 18.9493C105.646 18.9493 106.459 18.1898 106.694 17.081H110.165C109.74 19.9746 107.431 21.5848 103.778 21.5848C99.7674 21.5544 96.8282 19.0177 96.8282 14.7569ZM106.618 13.1544C106.489 11.1341 105.471 10.162 103.702 10.162C101.932 10.162 100.914 11.2557 100.664 13.1544H106.618Z" fill="#232536"/>
                  <path d="M81.8204 14.7569V14.5594C81.7806 13.6871 81.9131 12.8156 82.2103 11.9945C82.5076 11.1734 82.9637 10.419 83.5527 9.77431C84.1416 9.12962 84.8519 8.60733 85.6428 8.23728C86.4337 7.86723 87.2898 7.65669 88.1622 7.61768C88.3368 7.61768 88.5191 7.61768 88.6938 7.61768C92.1647 7.61768 95.2178 9.63793 95.2178 14.4531V15.4784H85.5799C85.6786 17.6962 86.8786 18.9493 88.8989 18.9493C90.6381 18.9493 91.4508 18.1898 91.6862 17.081H95.1571C94.7242 19.9746 92.4153 21.5848 88.7622 21.5848C84.7596 21.5544 81.8204 19.0177 81.8204 14.7569ZM91.6103 13.1544C91.4811 11.1341 90.4634 10.162 88.6938 10.162C86.9242 10.162 85.9368 11.286 85.6558 13.1468L91.6103 13.1544Z" fill="#232536"/>
                  <path d="M60.7598 7.89868H64.6484L67.0256 16.9063L69.6306 7.89868H72.6686L75.0231 16.9063L77.5294 7.89868H81.0914L76.8686 21.281H73.2231L70.9446 12.881L68.5066 21.281H64.8155L60.7598 7.89868Z" fill="#232536"/>
                  <path d="M48.4023 17.0735H51.8732C52.0327 18.2811 52.6327 18.9722 54.2277 18.9722C55.6555 18.9722 56.3163 18.433 56.3163 17.514C56.3163 16.595 55.5568 16.2077 53.6125 15.9342C50.0504 15.395 48.6758 14.3697 48.6758 11.757C48.6758 8.96968 51.2277 7.5874 53.9922 7.5874C56.9618 7.5874 59.2023 8.66588 59.5213 11.7418H56.096C56.0742 11.504 56.0054 11.2729 55.8937 11.0619C55.782 10.8508 55.6296 10.6639 55.4453 10.5121C55.261 10.3603 55.0484 10.2465 54.8199 10.1773C54.5913 10.1081 54.3513 10.0848 54.1137 10.1089H53.9998C52.7998 10.1089 52.1011 10.6709 52.1011 11.4912C52.1011 12.3115 52.7466 12.6684 54.7061 12.9494C58.0327 13.4507 59.8935 14.2937 59.8935 17.157C59.8935 20.0203 57.7897 21.5545 54.2656 21.5545C50.7416 21.5545 48.5011 19.9671 48.4023 17.0735Z" fill="#232536"/>
                  <path d="M33.6533 7.8987H37.3293V10.0177C37.7436 9.23991 38.3725 8.59744 39.1413 8.16662C39.91 7.73579 40.7863 7.53472 41.666 7.5873C44.271 7.5873 46.1622 9.17465 46.1622 12.7974V21.3114H42.5318V13.3291C42.5318 11.5139 41.8255 10.6481 40.185 10.6481C39.8382 10.6179 39.4889 10.6565 39.1572 10.7616C38.8254 10.8668 38.5176 11.0364 38.2516 11.2608C37.9855 11.4852 37.7664 11.76 37.6069 12.0693C37.4473 12.3786 37.3504 12.7164 37.3217 13.0633C37.3027 13.2247 37.3027 13.3879 37.3217 13.5493V21.281H33.6533V7.8987Z" fill="#232536"/>
                  <path d="M26.5598 4.53425C26.5465 4.16775 26.6422 3.80553 26.8349 3.49346C27.0275 3.18138 27.3085 2.9335 27.6421 2.78117C27.9757 2.62885 28.347 2.57894 28.709 2.63777C29.071 2.69659 29.4074 2.86151 29.6756 3.11163C29.9439 3.36176 30.1318 3.68585 30.2157 4.04286C30.2997 4.39988 30.2758 4.77377 30.1471 5.1172C30.0184 5.46063 29.7907 5.75815 29.4928 5.9721C29.1949 6.18605 28.8403 6.3068 28.4737 6.31906H28.4054C28.1779 6.33346 27.9498 6.3028 27.7342 6.22884C27.5185 6.15489 27.3196 6.03908 27.1489 5.88808C26.9781 5.73707 26.8389 5.55384 26.7391 5.34889C26.6393 5.14393 26.581 4.9213 26.5674 4.69375C26.5611 4.64083 26.5586 4.58753 26.5598 4.53425ZM26.5598 7.89881H30.2737V21.2811H26.575L26.5598 7.89881Z" fill="#232536"/>
                  <path d="M12.5625 2.99243H24.3043V6.23547H16.7093V11.0734H22.7245V14.195H16.7017V21.281H12.5625V2.99243Z" fill="#232536"/>
                  <path d="M5.47595 8.97721C5.47595 10.1241 5.47595 11.5215 3.8962 12.0911C5.51393 12.6456 5.47595 13.8228 5.47595 15.0532V19.6101C5.47595 20.4759 5.82532 21 6.4481 21.1291C6.58495 21.1753 6.72912 21.1959 6.87342 21.1899H8.39241V24.2278H5.88608C3.21266 24.2278 1.73924 22.7089 1.73924 19.8911V14.4987C1.72028 14.2219 1.59821 13.9622 1.39714 13.771C1.19607 13.5798 0.930606 13.4709 0.653165 13.4658H0V10.8H0.653165C0.936141 10.7963 1.20682 10.6837 1.40904 10.4858C1.61126 10.2878 1.72951 10.0195 1.73924 9.73671V4.26835C1.73924 1.4962 3.18228 0 5.88608 0H8.41519V2.9924H6.8962C6.75173 2.99282 6.60822 3.01589 6.47089 3.06076C5.8481 3.22025 5.49873 3.73671 5.49873 4.57975L5.47595 8.97721Z" fill="#232536"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_201_278">
                  <rect width="120" height="24.3038" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                  <span>©2021 Finsweet</span>
                </div>
                <div className={style.socialIcons}>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <LinkedInIcon/>
                </div>
              </div>
          </div>
    </div>
  )
}