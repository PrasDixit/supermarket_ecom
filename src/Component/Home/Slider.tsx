import "./Slider.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Fade } from "react-slideshow-image";

const fadeProperties = {
  duration: 3000,
  transitionDuration: 1500,
  infinite: true,
  arrows: false,
  indicators: false,
};

const Slideshow = () => {
  const baseURL = "https://uat.ordering-dalle.ekbana.net/";
  const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
  const warehouseId = "1";

  const [sliderImages, setSliderImages] = useState<any>();

  useEffect(() => {
    getSliderImages();
  }, []);

  const getSliderImages = async () => {
    try {
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };

      const response = await axios.get(`${baseURL}api/v4/config`, config);
      setSliderImages(response.data.data.userGroup);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="slide-container">
      {sliderImages && (
        <Fade {...fadeProperties}>
          {sliderImages &&
            sliderImages.map((img: any, index: number) => {
              return (
                <div className="each-fade" key={index}>
                  <div className="image-container">
                    <img src={img.image} alt="Img_1" />
                  </div>
                  <h3>{img.title}</h3>
                </div>
              );
            })}
        </Fade>
      )}
    </div>
  );
};

export default Slideshow;
