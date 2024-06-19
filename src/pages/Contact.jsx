import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Hero from '../components/Hero'
import ReCAPTCHA from "react-google-recaptcha";
const Contact = () => {
    const [Captcha, setCaptcha] = useState("")
    const [message, setMessage] = useState('')
    const form = useRef();
    function onChange(value) {
        console.log("Captcha value:", value);
        setCaptcha(value)
      }


const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setIsValid(validateEmail(email));
    console.log(isValid)
  };



  const sendEmail = (e) => {
    e.preventDefault();
    if(!Captcha){
        alert("please fill the captcha")
    }
    else if(isValid === false){
        alert("please write a valid email") 
    }
    else{
        emailjs
        .sendForm('service_cno54do', 'template_y6wfb94', form.current, {
          publicKey: '0nS9IhHCXBa_3rtb3',
        })
        .then(
          () => {
              setMessage("Successfully Message Sent!")
            console.log('SUCCESS!');
            e.target.reset();
            setEmail("");
            setPhoneNumber("");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
   
  };

  return (
    <section id="contact">
    <form action="" className="footer-form mt-[40px] w-[95%] lg:w-[70%] m-auto" ref={form} onSubmit={sendEmail}>

    <p className="footer-list-title">Contact Us</p>

    <div className="input-wrapper">

      <input type="text" name="user_name" required placeholder="Name*" aria-label="Your Name"
        className="input-field"/>

      <input type="email" value={email} onChange={handleChange} name="user_email" required placeholder="Email*" aria-label="Email"
        className="input-field"/>

    </div>

    <input type="number"  name="user_number" placeholder="Phone with Country Code (Optional)" aria-label="Phone"
        className="input-field my-2 mb-4"/>       
    <textarea name="message" required placeholder="Message*" aria-label="Message" className="input-field"></textarea>
    <ReCAPTCHA
    sitekey="6LfUj_kpAAAAADHe2hYhOiO3nA_Nacuw7TsLUL51"
    onChange={onChange}
    required
  />
  <p className='text-green-500 my-2 font-lora text-xl lg:text-2xl font-bold'>{message}</p>
    <button type="submit" className="btn my-2">Send</button>
  </form>
  </section>
  )
}

export default Contact