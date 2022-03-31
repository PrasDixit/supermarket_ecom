import { Link } from "react-router-dom";
export const brands = [
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
  {
    title: "Lorem",
  },
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
              .map((items) => {
                return (
                  <div className="col-md-2 w3layouts-brand">
                    <div className="brands-w3l">
                      <p>
                        <Link to="#">{items.title}</Link>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="clearfix"></div>
          <div className="brands-agile-1">
            {brands
              .filter((item, index) => index >= 6 && index < 12)
              .map((items) => {
                return (
                  <div className="col-md-2 w3layouts-brand">
                    <div className="brands-w3l">
                      <p>
                        <Link to="#">{items.title}</Link>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="clearfix"></div>
          <div className="brands-agile-1">
            {brands
              .filter((item, index) => index >= 12 && index < 18)
              .map((items) => {
                return (
                  <div className="col-md-2 w3layouts-brand">
                    <div className="brands-w3l">
                      <p>
                        <Link to="#">{items.title}</Link>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default BrandList;
