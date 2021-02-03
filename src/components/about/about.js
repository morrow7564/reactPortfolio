import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">


            </div>

            <div className="10 columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p> 
          <div>
            <a href= "https://docs.google.com/document/d/1bBwJDz3Mr8uPZIH3LcwWAZv2hyID4QQDyWCLi0uxKkc/edit" target="_blank" rel="noreferrer">

            
          <button className='butt'>RESUME</button>
          </a>
          </div>
               </div>
            </div>
      
      </section>
    );
  }
}
