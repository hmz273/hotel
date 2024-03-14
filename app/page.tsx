"use client"
import { useEffect, useState } from "react";
import NavBar from "./compoment/NavBar";
import Hero from "./compoment/Hero";
import About from "./compoment/About";
import Rooms from "./compoment/Rooms";
import Equipment from "./compoment/Equipment";
import Services from "./compoment/Services";
import Partners from "./compoment/Partners";
import Gallery from "./compoment/Gallery";
import Contact from "./compoment/Contact";
import Footer from "./compoment/Footer";
import Tab from "./compoment/Tab";


const page = () => {

  return (
    <>
    <div className="p-2 md:p-0">
      <NavBar />
      <Hero />
      <About />
      <Rooms />
      <Equipment />
      <Services />
      <Partners />
      <Gallery />
      <Tab />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default page;


