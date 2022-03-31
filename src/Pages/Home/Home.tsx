import ImgSlider from "../../Component/Home/Slider";
import BannerBotm from "../../Component/Home/BannerBotm";
import Carousel from "../../Component/Home/Carousel";
import BrandList from "../../Component/Home/BrandList";
import NewOffers from "../../Component/Home/NewOffers";
import OffersMain from "../../Component/Offers/OffersMain";
const Home = () => {
  return (
    <>
      <ImgSlider />
      <OffersMain />
      <BannerBotm />
      <Carousel />
      <BrandList />
      <NewOffers />
    </>
  );
};

export default Home;
