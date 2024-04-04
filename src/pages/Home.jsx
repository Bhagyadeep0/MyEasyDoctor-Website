// components
import About from "../components/Home/About";
import Feature from "../components/Home/Feature";
import Hero from "../components/Home/Hero";
import Footer from "../components/Footer";
import Swiper from "../components/Home/SwiperDoctor";
import Hospitals from "../components/Home/Hospitals";
import Offers from "../components/Offers";
import Testimonial from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Hospitals />
      <Feature />
      <About />
      <Swiper />
      <Offers />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
