

import "./heroImg2Styles.css";
import React, { Component } from "react";

class HeroImg2 extends Component{
    render(){
        return(
    
        <div>
            <div className="hero-Img">
               <div className="heading">
                <h1> {this.props.heading} </h1>
                <p> {this.props.text} </p> 

               </div>
            </div>
        </div>
    
);
}
    
};




export default HeroImg2;


