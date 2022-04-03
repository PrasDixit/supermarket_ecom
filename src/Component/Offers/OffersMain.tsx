// import { Link } from "react-router-dom";
// import AllProducts from "../Products_Main/AllProductsProps";
// import AdvertisedOffers from "./AdvertisedOffers";
// import TodayOffers from "./TodayOffers";

// const OffersMain = (props: any) => {
//   return (
//     <>
//       <div className="top-brands">
//         <div className="container">
//           <h2>Top selling offers</h2>
//           <div className="grid_3 grid_5">
//             <div
//               className="bs-example bs-example-tabs"
//               role="tabpanel"
//               data-example-id="togglable-tabs"
//             >
//               <ul id="myTab" className="nav nav-tabs" role="tablist">
//                 <li role="presentation" className="active">
//                   <Link
//                     to="#expeditions"
//                     id="expeditions-tab"
//                     role="tab"
//                     data-toggle="tab"
//                     aria-controls="expeditions"
//                     aria-expanded="true"
//                   >
//                     Advertised Offers
//                   </Link>
//                 </li>
//                 <li role="presentation">
//                   <Link
//                     to="#tours"
//                     role="tab"
//                     id="tours-tab"
//                     data-toggle="tab"
//                     aria-controls="tours"
//                   >
//                     Today Offers
//                   </Link>
//                 </li>
//               </ul>
//               <div id="myTabContent" className="tab-content">
//                 {props.offers === "yes" ? (
//                   <AllProducts />
//                 ) : (
//                   <AdvertisedOffers />
//                 )}
//                 <TodayOffers />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OffersMain;

export {};
