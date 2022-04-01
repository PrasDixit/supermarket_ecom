import AllProducts from "../Products_Main/AllProductsProps";

const advertisedOffers = [
  {
    title: "Offer 1",
    discountedPrice: 35.99,
    initialPrice: 65.99,
    image: "1.png",
  },
  {
    title: "Offer 2",
    discountedPrice: 35.99,
    initialPrice: 65.99,
    image: "2.png",
  },
  {
    title: "Offer 3",
    discountedPrice: 35.99,
    initialPrice: 65.99,
    image: "3.png",
  },
  {
    title: "Offer 4",
    discountedPrice: 35.99,
    initialPrice: 65.99,
    image: "4.png",
  },
  {
    title: "Offer 5",
    discountedPrice: 35.99,
    initialPrice: 65.99,
    image: "5.png",
  },
  {
    title: "Offer 6",
    discountedPrice: 35.99,
    initialPrice: 65.99,
    image: "6.png",
  },
];

const AdvertisedOffers = () => {
  return (
    <div
      role="tabpanel"
      className="tab-pane fade in active"
      id="expeditions"
      aria-labelledby="expeditions-tab"
    >
      <div className="agile-tp">
        <h5>Advertised this week</h5>
        <p className="w3l-ad">
          We've pulled together all our advertised offers into one place, so you
          won't miss out on a great deal.
        </p>
      </div>
      <div className="agile_top_brands_grids">
        {advertisedOffers
          .filter((prod, index) => index < 3)
          .map((prod, index) => {
            return (
              <div key={index} className="col-md-4 top_brand_left">
                <AllProducts {...prod} />
              </div>
            );
          })}
        <div className="clearfix"> </div>
      </div>
      {advertisedOffers.length > 3 && (
        <div className="agile_top_brands_grids">
          {advertisedOffers
            .filter((prod, index) => index > 2 && index < 6)
            .map((prod, index) => {
              return (
                <div key={index} className="col-md-4 top_brand_left">
                  <AllProducts {...prod} />
                </div>
              );
            })}
          <div className="clearfix"> </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisedOffers;
