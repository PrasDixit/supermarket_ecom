import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
    <div>
      <div className="navigation-agileits">
        <div className="container">
          <nav className="navbar navbar-default">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header nav_2">
              <button
                type="button"
                className="navbar-toggle collapsed navbar-toggle1"
                data-toggle="collapse"
                data-target="#bs-megadropdown-tabs"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/" className="act">
                    HOME
                  </Link>
                </li>

                {categories &&
                  categories.map((category: any) => {
                    return category.subcategories.data === [] ? (
                      <li className="dropdown" key={`${category.title}`}>
                        <Link
                          to="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          {category.title}
                          <b className="caret"></b>
                        </Link>
                        <ul className="dropdown-menu multi-column columns-3">
                          <div className="row">
                            <div className="multi-gd-img">
                              <ul className="multi-column-dropdown">
                                <h6>{category.title}</h6>
                                {category.subcategories.data.map(
                                  (subCat: any) => {
                                    return (
                                      <li key={`${subCat.title}`}>
                                        <Link to="/">{subCat.title}</Link>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                        </ul>
                      </li>
                    ) : (
                      <li key={`${category.title}`}>
                        <Link
                          to={`/${category.title
                            .replace(/ /g, "")
                            .toLowerCase()}`}
                        >
                          {category.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
