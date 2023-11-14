import React, {useRef} from 'react';
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lw4mj5j', 'template_nqdqwcg', form.current, '21DKZvOXlvZDkTXN0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div id='contactPage'> 
       <div id='clients'>
             <h1 className="contactPageTitle">My Client</h1>
             <p className="clientDesc">I have had the operunity to work a diverse grop
             of companies some of the notable i have worked with includes</p>
             <div className="clinetImgs">
                <img src={Walmart} alt="client" className="clinetImg" />
                <img src={Adobe} alt="client" className="clinetImg" />
                <img src={Microsoft} alt="client" className="clinetImg" />
                <img src={Facebook} alt="client" className="clinetImg" />
             </div>
       </div>
       <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contcatDesc'>Please fill out the form below to discuss any wirk opportunities.</span>
          <form className='contactForm'ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name' name="from_name"/>
            <input type="email" className='email' placeholder='Your Email' name="from_email" />
             <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
             <button  type='submit' value='send' className='submitBtn' onClick={()=> alert("Message sent Sucessfully ")}>Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="" className="link" />
                <img src={TwitterIcon} alt="" className="link" />
                <img src={YoutubeIcon} alt="" className="link" />
                <img src={InstagramIcon} alt="" className="link" />
            </div>
          </form>

       </div>
      
    </div>
  )
}

export default Contact
