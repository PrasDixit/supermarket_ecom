import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../Css/SideNav.css";

library.add(faArrowRight);

const SideNavContainer = () => {
  const baseUrl = "https://uat.ordering-dalle.ekbana.net/";
  const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
  const warehouseId = 1;
  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };

      const response = await axios.get(`${baseUrl}api/v4/category`, config);
      if (response.status === 200) {
        setCategories(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="sidenavcontainer">
        <div className="sidebar-header">
          <h3>Categories</h3>
        </div>
        <div className="sidebar-contents">
          <ul className="category">
            {/* Fruits & Vegetables */}
            {categories &&
              categories.map((item: any) => {
                return (
                  <li className="sidebar-list-item" key={item.title}>
                    <Link
                      to={`/${item.title.replace(/ /g, "").toLowerCase()}`}
                      className="sidebar-content"
                    >
                      <FontAwesomeIcon
                        icon="arrow-right"
                        className="arrow-icon"
                      />
                      {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNavContainer;
