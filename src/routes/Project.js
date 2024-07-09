import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/heroImg2";
import Projectcard from "../components/projectcard";



const Project=() => {

    return (
        <div>
            <Navbar />
            <HeroImg2 heading="Projects." text="Some of my recent works" />
            <Projectcard />
            
            
            
           
        </div>
    )
}

export default Project;