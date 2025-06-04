import FeaturesEvents from "../../components/homeComponents/FeaturesEvents";
import HeroSlider from "../../components/homeComponents/HeroSlider";

const Home = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSlider />
      <FeaturesEvents />
    </div>
  );
};

export default Home;
