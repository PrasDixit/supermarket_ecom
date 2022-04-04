import { useState, useEffect } from "react";
import axios from "axios";
import AllProducts from "./AllProductsProps";

interface Props {
  categoryid: number;
}

const CategoryById = ({ categoryid }: Props) => {
  const baseURL = "https://uat.ordering-dalle.ekbana.net/";
  const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
  const warehouseId = "1";

  const [productCategoryById, setProductCategoryById] = useState<any>();

  useEffect(() => {
    getProductsById();
  }, []);

  const getProductsById = async () => {
    try {
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };

      const response = await axios.get(
        `${baseURL}api/v4/product?categoryId=${categoryid}`,
        config
      );
      if (response.status === 200) {
        setProductCategoryById(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="prod-page">
        <div className="agile_top_brands_grids">
          {productCategoryById &&
            productCategoryById.map((prod: any) => {
              return (
                <div className="col-md-4 top_brand_left" key={prod.title}>
                  <AllProducts {...prod} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CategoryById;
