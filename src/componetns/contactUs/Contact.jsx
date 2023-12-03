import FormValidation from './FormValidation';
import style from './contact.module.css'


export default function Contact() {
    

  return (
    <div className={style.contactContainerParent}>
        <div className={style.contactContainer} data-aos="fade-up"
    data-aos-duration="700">
            <div className={style.contactContent}>
                <div className={style.contentChildBlock}>
                    <div className={style.contactFlex_1}>
                        <div className={style.contactTextBlock}>
                            <h4>CONTACT US</h4>
                            <h2>Have a Question ?<br></br>Let’s Get in Touch with us 👋</h2>
                            <p>Fill up the Form  and ou team will get back to within 24 hrs</p>
                        </div>
                        <div className={style.contactFormBlock}>
                            <FormValidation/>
                        </div>
                    </div>
                    <div className={style.contactFlex_2}>
                        <div className={style.contactFlex_innerText}>
                            <h4>Location</h4>
                            <div></div>
                            <span>DLF Cybercity, Bhubaneswar, India, &52050</span>
                            <h4>Working Hour</h4>
                            <div></div>
                            <span>Monday To Friday<br></br>9:00 AM to 8:00 PM </span>
                            <small>9:00 AM to 8:00 PM </small>
                            <h4>Contact Us</h4>
                            <div className={style.tel_number_and_email}>
                                <span>020 7993 2905</span>
                                <small>Hello@ether.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.mapBlock}>
            <iframe className={style.map} data-aos="zoom-in-up" title='map' src="https://maps.google.com/maps?q=medical%20center%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
  )
}
