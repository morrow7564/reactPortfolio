import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import pdf from "./CM-resume.pdf";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">


            </div>
            <Fade bottom> 
            <div className="10 columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p> 
          <div>
          <a href={pdf} target="_blank" rel="noreferrer">
          <button className='butt'>RESUME</button>
          </a>
          </div>
               </div>
               </Fade>
            </div>
      
      </section>
    );
  }
}
