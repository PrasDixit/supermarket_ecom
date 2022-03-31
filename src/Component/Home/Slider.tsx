import Sliding from "../Sliding";

const sliderDesc = [
  { src: "11.jpg", des: "Buy Rice Products Are Now On Line With Us" },
  { src: "22.jpg", des: "Whole Spices Products Are Now On Line With Us" },
  { src: "44.jpg", des: "Whole Spices Products Are Now On Line With Us" },
];

const ImgSlider = () => {
  return (
    <>
      <ul id="demo1">
        {sliderDesc.map((item, index) => {
          return <Sliding key={index} {...item} />;
        })}
      </ul>
    </>
  );
};

export default ImgSlider;
