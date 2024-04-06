// components
import About from "../components/Home/About";
import Feature from "../components/Home/Feature";
import Hero from "../components/Home/Hero";
import Swiper from "../components/Home/SwiperDoctor";
import Hospitals from "../components/Home/Hospitals";
import Offers from "../components/Offers";
import Testimonial from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Hospitals />
      <Feature />
      <About />
      <Swiper />
      <Offers />
      <Testimonial />
    </>
  );
};

export default Home;
