import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Inspiration extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="inspiration">
        <Fade bottom> 
        <div className="text-container">
          <div className="row">
           
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.inspiration && resumeData.inspiration.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p>
                            {item.description}
                            </p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> 
            </div> 
          </div>
        </div>  
        </Fade>
      </section>
        );
  }
}
