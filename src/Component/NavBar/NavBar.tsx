import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
                  Home
                </Link>
              </li>
              {/* <!-- Mega Menu --> */}
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Groceries<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>All Groceries</h6>
                        <li>
                          <Link to="/Groceries">Dals & Pulses</Link>
                        </li>
                        <li>
                          <Link to="/Groceries">Almonds</Link>
                        </li>
                        <li>
                          <Link to="/Groceries">Cashews</Link>
                        </li>
                        <li>
                          <Link to="/Groceries">Dry Fruit</Link>
                        </li>
                        <li>
                          <Link to="/Groceries"> Mukhwas </Link>
                        </li>
                        <li>
                          <Link to="/Groceries">Rice & Rice Products</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Household<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>All Household</h6>
                        <li>
                          <Link to="/Household">Cookware</Link>
                        </li>
                        <li>
                          <Link to="/Household">Dust Pans</Link>
                        </li>
                        <li>
                          <Link to="/Household">Scrubbers</Link>
                        </li>
                        <li>
                          <Link to="/Household">Dust Cloth</Link>
                        </li>
                        <li>
                          <Link to="/Household"> Mops </Link>
                        </li>
                        <li>
                          <Link to="/Household">Kitchenware</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Personal Care<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>Baby Care</h6>
                        <li>
                          <Link to="/PersonalCare">Baby Soap</Link>
                        </li>
                        <li>
                          <Link to="/PersonalCare">Baby Care Accessories</Link>
                        </li>
                        <li>
                          <Link to="/PersonalCare">Baby Oil & Shampoos</Link>
                        </li>
                        <li>
                          <Link to="/PersonalCare">Baby Creams & Lotion</Link>
                        </li>
                        <li>
                          <Link to="/PersonalCare"> Baby Powder</Link>
                        </li>
                        <li>
                          <Link to="/PersonalCare">Diapers & Wipes</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Packaged Foods<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>All Accessories</h6>
                        <li>
                          <Link to="/PackagedFoods">Baby Food</Link>
                        </li>
                        <li>
                          <Link to="/PackagedFoods">Dessert Items</Link>
                        </li>
                        <li>
                          <Link to="/PackagedFoods">Biscuits</Link>
                        </li>
                        <li>
                          <Link to="/PackagedFoods">Breakfast Cereals</Link>
                        </li>
                        <li>
                          <Link to="/PackagedFoods"> Canned Food </Link>
                        </li>
                        <li>
                          <Link to="/PackagedFoods">Chocolates & Sweets</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Beverages<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>Tea & Coeffe</h6>
                        <li>
                          <Link to="/Beverages">Green Tea</Link>
                        </li>
                        <li>
                          <Link to="/Beverages">Ground Coffee</Link>
                        </li>
                        <li>
                          <Link to="/Beverages">Herbal Tea</Link>
                        </li>
                        <li>
                          <Link to="/Beverages">Instant Coffee</Link>
                        </li>
                        <li>
                          <Link to="/Beverages"> Tea </Link>
                        </li>
                        <li>
                          <Link to="/Beverages">Tea Bags</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li>
                <Link to="/Gourmet">Gourmet</Link>
              </li>
              <li>
                <Link to="/Offers">Offers</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
