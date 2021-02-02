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
          <button href= "https://docs.google.com/document/d/1bBwJDz3Mr8uPZIH3LcwWAZv2hyID4QQDyWCLi0uxKkc/edit" target="_blank" rel="noreferrer" className='butt'>RESUME</button>
          </div>
               </div>
            </div>
      
      </section>
    );
  }
}
