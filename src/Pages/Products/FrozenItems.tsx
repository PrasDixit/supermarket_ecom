import CategoryById from "../../Component/Products_Main/GetProductsById";
import SideNavContainer from "../../Component/Sidenav/Sidenav";
import Sorting from "../../Component/Products_Main/Sorting";
import Pagination from "../../Component/Pagination/Pagination";
import BreadCrumbs from "../../Component/Breadcrumbs/BreadCrumbs";

const FrozenItems = () => {
  return (
    <>
      <BreadCrumbs name="Frozen Items" />
      <div className="container">
        <Sorting />
      </div>
      <div className="product-container">
        <SideNavContainer />
        <div className="prod-page">
          <CategoryById categoryid={11} />
          <Pagination postsPerPage={9} totalPosts={2} paginate={1} />
        </div>
      </div>
    </>
  );
};

export default FrozenItems;
