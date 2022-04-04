import SideNavContainer from "../../Component/Sidenav/Sidenav";
import ProductDisplay from "../../Component/Products_Main/ProductDisplay";
import Sorting from "../../Component/Products_Main/Sorting";

const Products = () => {
  return (
    <>
      <div className="container">
        <Sorting />
      </div>
      <div className="product-container">
        <SideNavContainer />
        <ProductDisplay />
      </div>
    </>
  );
};

export default Products;
