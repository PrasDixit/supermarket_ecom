import Brands from "./Brands";

export const brands = [
  { title: "Snacks" },
  { title: "Signatures" },
  { title: "Dalle Momos" },
  { title: "Rice and Noodles" },
  { title: "Frozen Items" },
  { title: "Momo" },
  { title: "Signature" },
  { title: "Pizza" },
  { title: "Beverages" },
];
const BrandList = () => {
  return (
    <>
      <div className="brands">
        <div className="container">
          <h3>Menu</h3>
          <div className="brands-agile">
            {brands
              .filter((item, index) => index < 3)
              .map((items, index) => {
                return <Brands key={index} {...items} />;
              })}
          </div>
          <div className="clearfix"></div>
          <div className="brands-agile-1">
            {brands
              .filter((item, index) => index >= 3 && index < 6)
              .map((items, index) => {
                return <Brands key={index} {...items} />;
              })}
          </div>
          <div className="clearfix"></div>
          <div className="brands-agile-1">
            {brands
              .filter((item, index) => index >= 6 && index < 9)
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
