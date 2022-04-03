// import AllProducts from "../Products_Main/AllProductsProps";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const baseUrl = "https://uat.ordering-dalle.ekbana.net/";
// const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
// const warehouseId = 1;

// const AdvertisedOffers = () => {
//   const [advertisedOffers, setAdvertisedOffers] = useState<any>();

//   useEffect(() => {
//     getAdvOffers();
//   });

//   const getAdvOffers = async () => {
//     try {
//       const config = {
//         headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
//       };
//       let response = await axios.get(`${baseUrl}api/v4/product`, config);
//       setAdvertisedOffers(response.data);
//       console.log(advertisedOffers);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div
//       role="tabpanel"
//       className="tab-pane fade in active"
//       id="expeditions"
//       aria-labelledby="expeditions-tab"
//     >
//       <div className="agile-tp">
//         <h5>Advertised this week</h5>
//         <p className="w3l-ad">
//           We've pulled together all our advertised offers into one place, so you
//           won't miss out on a great deal.
//         </p>
//       </div>
//       <div className="agile_top_brands_grids">
//         {advertisedOffers
//           .filter((prod: any, index: any) => index < 3)
//           .map((prod: any, index: any) => {
//             return (
//               <div key={index} className="col-md-4 top_brand_left">
//                 <AllProducts products={prod} />
//               </div>
//             );
//           })}
//         <div className="clearfix"> </div>
//       </div>
//       {advertisedOffers.length > 3 && (
//         <div className="agile_top_brands_grids">
//           {advertisedOffers &&
//             advertisedOffers
//               .filter((prod: any, index: any) => index > 2 && index < 6)
//               .map((prod: any, index: any) => {
//                 return (
//                   <div key={index} className="col-md-4 top_brand_left">
//                     <AllProducts products={prod} />
//                   </div>
//                 );
//               })}
//           <div className="clearfix"> </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdvertisedOffers;
export {};
