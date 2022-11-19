import React, { useState , useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

export const Form = () => {
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1n4qu3d', 'template_jq1fw55', form.current, '_8L0WmMTkcNBbAb6L')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setMessageSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='formContainer' id="contact">
      <h1>Contact</h1>
      <p>Feel free to send me an email!</p>
      {!messageSent && <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input type="text" name="user_name"></input>
          <label>Email</label>
          <input type="email" name="user_email"></input>
          <label>Subject</label>
          <input type="text" name="subject"></input> 
          <label>Message</label>
          <textarea rows="6" placeholder="Type your message here" name="message"/>
          <button className="btn" type="submit" value="send">Submit</button> 
        </form>
      </div>}
      {messageSent && <div className="messageSent">Thank you for contacting me! <br></br>Your email has been sent sucessfully! </div>}
    </div>  
  );
};

export default Form;
