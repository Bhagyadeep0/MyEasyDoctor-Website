// components
import About from "../components/Home/About";
import Feature from "../components/Home/Feature";
import Hero from "../components/Home/Hero";
import Swiper from "../components/Home/SwiperDoctor";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      {/* <Swiper /> */}
    </div>
  );
};

export default Home;
