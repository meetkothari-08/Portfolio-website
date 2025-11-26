import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/heroImg2";
import Projectcard from "../components/projectcard";
import Footer from "../components/footer";



const Project=() => {

    return (
        <div>
            <Navbar />
            <HeroImg2 heading="Projects." text="Some of my recent works" />
            <Projectcard />
            <Footer />
            
            
           
        </div>
    )
}

export default Project;