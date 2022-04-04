import { useState, useEffect } from "react";
import axios from "axios";
import AllProducts from "./AllProductsProps";
import Pagination from "../Pagination/Pagination";
import "../../Css/Products.css";

const ProductDisplay = () => {
  const baseUrl = "https://uat.ordering-dalle.ekbana.net/";
  const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
  const warehouseId = 1;

  const [productCategory, setProductCategory] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };

      const response = await axios.get(`${baseUrl}api/v4/product`, config);
      if (response.status === 200) {
        setProductCategory(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = (productCategory || []).slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  console.log(postsPerPage, currentPosts);

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="prod-page">
        <div className="agile_top_brands_grids">
          {currentPosts &&
            currentPosts.map((prod: any) => {
              return (
                <div className="col-md-4 top_brand_left" key={prod.title}>
                  <AllProducts {...prod} />
                </div>
              );
            })}
        </div>
        <div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={(productCategory || []).length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
