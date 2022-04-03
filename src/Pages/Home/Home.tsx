import { lazy, Suspense } from "react";
// import Slider from "../../Component/Home/Slider";
import BannerBotm from "../../Component/Home/BannerBotm";
import Carousel from "../../Component/Home/Carousel";
import BrandList from "../../Component/Home/BrandList";
import NewOffers from "../../Component/Home/NewOffers";
const Slider = lazy(() => import("../../Component/Home/Slider"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Slider />
      </Suspense>
      <BannerBotm />
      <Carousel />
      <BrandList />
      <NewOffers />
    </div>
  );
};

export default Home;
