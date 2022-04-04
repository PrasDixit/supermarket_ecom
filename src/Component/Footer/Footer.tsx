import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="w3_footer_grids">
            <div className="col-md-3 w3_footer_grid">
              <h3>Contact</h3>
              <ul className="address">
                <li>
                  <i
                    className="glyphicon glyphicon-map-marker"
                    aria-hidden="true"
                  ></i>
                  1234k Avenue, 4th block, <span>New York City.</span>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  ></i>
                  <Link to="mailto:info@example.com">info@example.com</Link>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  ></i>
                  +1234 567 567
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Information</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/About">About Us</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Contact">Contact Us</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/ShortCodes">Short Codes</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/FAQ">FAQ's</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Products">Special Products</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Category</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Groceries">Snacks</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Household">Signatures</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/PersonalCare">Momo</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/PackagedFoods">Rice and Noodles</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Beverages">Frozen Items</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Profile</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Products">Store</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Checkout">My Cart</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Register">Create Account</Link>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container">
            <p>© 2022 Super Market. All rights reserved</p>
          </div>
        </div>
      </div>
      <div className="footer-botm">
        <div className="container">
          <div className="w3layouts-foot">
            <ul>
              <li>
                <Link to="#" className="w3_agile_facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="agile_twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="w3_agile_dribble">
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="w3_agile_vimeo">
                  <i className="fa fa-vimeo" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="payment-w3ls">
            <img
              src="../../../assets/images/card.png"
              alt=" "
              className="img-responsive"
            />
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
