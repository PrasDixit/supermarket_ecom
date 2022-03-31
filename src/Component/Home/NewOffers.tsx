import AllProducts from "../Products_Main/AllProductsProps";

export const newOfferItems = [
  {
    title: "New Offer",
    discountedPrice: 35.99,
    initialPrice: 43.32,
    image: "14.png",
  },
  {
    title: "New Offer",
    discountedPrice: 35.99,
    initialPrice: 43.32,
    image: "15.png",
  },
  {
    title: "New Offer",
    discountedPrice: 35.99,
    initialPrice: 43.32,
    image: "16.png",
  },
  {
    title: "New Offer",
    discountedPrice: 35.99,
    initialPrice: 43.32,
    image: "17.png",
  },
];

const NewOffers = () => {
  return (
    <>
      <div className="newproducts-w3agile">
        <div className="container">
          <h3>New offers</h3>
          <div className="agile_top_brands_grids">
            {newOfferItems.map((item, index) => {
              return (
                <div key={index} className="col-md-3 top_brand_left-1">
                  <AllProducts {...item} />
                </div>
              );
            })}

            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewOffers;
