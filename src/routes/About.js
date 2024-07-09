import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/heroImg2";
import Aboutcontent from "../components/aboutcontent";

const About=() => {

    return (
        <div>
           <Navbar />
           <HeroImg2 heading="About Me" text="Computer Engineering(Data Science) student. "/>

           <Aboutcontent />
        </div>
    )
}

export default About;