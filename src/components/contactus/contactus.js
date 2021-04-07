import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
 
    return (
      <section id="contact">
          <div className="row section-head">
            <div> <h1>Contact Me</h1></div>
            <div> <h2>Morrow7564@gmail.com</h2></div>
          
        
     <div className='contactbox'>
     <input className='col-md-6 col-12 section-space--bottom--20'type="text" placeholder="Your Name"></input>
       <input name="con_email" type="email" placeholder="Your Email"></input>
       <textarea className="col-12" name="con_message" placeholder="Your Message"></textarea>
       <button className='but' >Send Message</button> 
     </div>
          </div>
        </section>
        );
  }
}
