import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
         <Fade bottom> 
      <div className="row">
        <div className="twelve columns collapsed">
        <h1>Portfolio</h1> <h2>Check Out Some of My Work.</h2>
     
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
             
             
              return(
                <div className="columns portfolio-item">
                  
                  
                  <div className="item-wrap">
                   
                      <img src={`${item.imgurl}`} className="item-img"/>
                      
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                        </div>
                        
                      </div>
                    
                  </div>
                  <div> 
                        <a href={item.link} target="_blank" rel="noreferrer"className="app-link"><i className="fas fa-link"></i> App</a> <a href={item.github} target="_blank" rel="noreferrer"className="app-link"><i className="fas fa-link"></i> Github</a>
                          </div>
                  
                </div>
                
              )
            })
          }


          </div>
        </div>
      </div>
      </Fade>
  </section>
        );
  }
}
