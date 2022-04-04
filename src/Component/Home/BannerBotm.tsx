import axios from "axios";
import { useState, useEffect } from "react";
import "../../Css/Banner.css";

const BannerBotm = () => {
  const baseURL = "https://uat.ordering-dalle.ekbana.net/";
  const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
  const warehouseId = "1";

  const [bannerBotm, setBannerBotm] = useState<any>();

  useEffect(() => {
    getBannerBotm();
  }, []);

  const getBannerBotm = async () => {
    try {
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };

      const response = await axios.get(`${baseURL}api/v4/config`, config);
      setBannerBotm(response.data.data.userGroup);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="ban-bottom-w3l">
        <div className="container">
          <div className="col-md-6 ban-bottom3">
            <div className="ban-top">
              <img
                // src={(bannerBotm[0] || []).image}
                className="img-responsive banner-img"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 ban-bottom">
            <div className="ban-top">
              <img
                // src={(bannerBotm[4] || []).image}
                className="img-responsive banner-img"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 ban-bottom">
            <div className="ban-top">
              <img
                // src={(bannerBotm[2] || []).image}
                className="img-responsive banner-img"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 ban-bottom">
            <div className="ban-top">
              <img
                // src={(bannerBotm[1] || []).image}
                className="img-responsive banner-img"
                alt=""
              />
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
      ;
    </>
  );
};

export default BannerBotm;
