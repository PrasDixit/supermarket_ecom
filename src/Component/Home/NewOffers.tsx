import { useState, useEffect } from "react";
import axios from "axios";

import AllProducts from "../Products_Main/AllProductsProps";

const NewOffers = () => {
  const baseURL = "https://uat.ordering-dalle.ekbana.net/";
  const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
  const warehouseId = "1";

  const [offers, setOffers] = useState<any>();

  useEffect(() => {
    getOffers();
  }, []);

  const getOffers = async () => {
    try {
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };

      const response = await axios.get(
        `${baseURL}api/v4/product?categoryId=2`,
        config
      );
      setOffers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="newproducts-w3agile">
        <div className="container">
          <h3>New offers</h3>
          <div className="agile_top_brands_grids">
            {offers &&
              offers.map((offer: any) => {
                return (
                  <div key={offer.id} className="col-md-3 top_brand_left-1">
                    <AllProducts {...offer} />
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
