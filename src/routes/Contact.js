import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/heroImg2";
import Contactform from "../components/contactform";
import Footer from "../components/footer";

const Contact=() => {

    return (
        <div>
            <Navbar/>
            <HeroImg2 heading="Contact Me." text="Let's Connect! "/>
            <Contactform/>
            <Footer />
        </div>
    )
}

export default Contact;