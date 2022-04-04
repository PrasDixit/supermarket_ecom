import CategoryById from "../../Component/Products_Main/GetProductsById";
import SideNavContainer from "../../Component/Sidenav/Sidenav";
import Sorting from "../../Component/Products_Main/Sorting";
import Pagination from "../../Component/Pagination/Pagination";
import BreadCrumbs from "../../Component/Breadcrumbs/BreadCrumbs";

const Signatures = () => {
  return (
    <>
      <BreadCrumbs name="Signatures" />
      <div className="container">
        <Sorting />
      </div>
      <div className="product-container">
        <SideNavContainer />
        <div className="prod-page">
          <CategoryById categoryid={6} />
          <Pagination postsPerPage={9} totalPosts={5} paginate={1} />
        </div>
      </div>
    </>
  );
};

export default Signatures;
