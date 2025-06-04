import FeaturesEvents from "../../components/homeComponents/FeaturesEvents";
import HeroSlider from "../../components/homeComponents/HeroSlider";
import Testimonials from "../../components/homeComponents/Testimonials";
import PopularSports from "../../components/homeComponents/PopularSports";

const Home = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSlider />
      <FeaturesEvents />
      <PopularSports />
      <Testimonials />
    </div>
  );
};

export default Home;
