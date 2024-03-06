import NavBar from "./compoment/NavBar";
import Hero from "./compoment/Hero";
import Booking from "./compoment/Booking";
import About from "./compoment/About";
import Rooms from "./compoment/Rooms";
import Equipment from "./compoment/Equipment";
import Services from "./compoment/Services";
import Gallery from "./compoment/Gallery";
import Testimonial from "./compoment/Testimonial";
import Contact from "./compoment/Contact";
import Footer from "./compoment/Footer";

const page = () => {
  return (
    <>
    <div className="p-2 md:p-0">
      <NavBar />
      <Hero />
      <Booking />
      <About />
      <Rooms />
      <Equipment />
      <Services />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default page;
