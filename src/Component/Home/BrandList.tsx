import Brands from "./Brands";

export const brands = [
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
  { title: "Lorem" },
];
const BrandList = () => {
  return (
    <>
      <div className="brands">
        <div className="container">
          <h3>Brand Store</h3>
          <div className="brands-agile">
            {brands
              .filter((item, index) => index < 6)
              .map((items, index) => {
                return <Brands key={index} {...items} />;
              })}
          </div>
          <div className="clearfix"></div>
          <div className="brands-agile-1">
            {brands
              .filter((item, index) => index >= 6 && index < 12)
              .map((items, index) => {
                return <Brands key={index} {...items} />;
              })}
          </div>
          <div className="clearfix"></div>
          <div className="brands-agile-1">
            {brands
              .filter((item, index) => index >= 12 && index < 18)
              .map((items, index) => {
                return <Brands key={index} {...items} />;
              })}
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default BrandList;
