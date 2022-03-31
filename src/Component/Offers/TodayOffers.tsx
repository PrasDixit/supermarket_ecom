import AllProducts from "../Products_Main/AllProductsProps";

const todayOffers = [
  {
    title: "Todays offer",
    discountedPrice: 35.99,
    initialPrice: 45.99,
    image: "7.png",
  },
  {
    title: "Todays offer",
    discountedPrice: 25.99,
    initialPrice: 29.99,
    image: "8.png",
  },
  {
    title: "Todays offer",
    discountedPrice: 35.99,
    initialPrice: 60.5,
    image: "9.png",
  },
  {
    title: "Todays offer",
    discountedPrice: 65.99,
    initialPrice: 85.99,
    image: "10.png",
  },
  {
    title: "Todays offer",
    discountedPrice: 85.99,
    initialPrice: 90.0,
    image: "12.png",
  },
  {
    title: "Todays offer",
    discountedPrice: 55.99,
    initialPrice: 65.99,
    image: "13.png",
  },
];

const TodayOffers = () => {
  return (
    <div
      role="tabpanel"
      className="tab-pane fade"
      id="tours"
      aria-labelledby="tours-tab"
    >
      <div className="agile-tp">
        <h5>This week</h5>
        <p className="w3l-ad">
          We've pulled together all our advertised offers into one place, so you
          won't miss out on a great deal.
        </p>
      </div>
      <div className="agile_top_brands_grids">
        {todayOffers
          .filter((item, index) => index < 3)
          .map((item, index) => {
            return (
              <div key={index} className="col-md-4 top_brand_left">
                <AllProducts {...item} />
              </div>
            );
          })}
        <div className="clearfix"> </div>
      </div>
      <div className="agile_top_brands_grids">
        {todayOffers
          .filter((item, index) => index > 2 && index < 6)
          .map((item, index) => {
            return (
              <div key={index} className="col-md-4 top_brand_left">
                <AllProducts {...item} />
              </div>
            );
          })}
        <div className="clearfix"> </div>
      </div>
      )
    </div>
  );
};

export default TodayOffers;
