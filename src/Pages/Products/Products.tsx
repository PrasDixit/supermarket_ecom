import SideNavContainer from "../../Component/Sidenav/Sidenav";
import ProductDisplay from "../../Component/Products_Main/ProductDisplay";
import Sorting from "../../Component/Products_Main/Sorting";
import BreadCrumbs from "../../Component/Breadcrumbs/BreadCrumbs";

const Products = () => {
  return (
    <>
      <BreadCrumbs name="All Products" />
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
