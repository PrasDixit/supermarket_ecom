import { Link } from "react-router-dom";

const imagePath = "../../../assets/images/";

const AllProducts = (props: any) => {
  return (
    <>
      <div className="hover14 column">
        <div className="agile_top_brand_left_grid">
          <div className="agile_top_brand_left_grid_pos">
            <img
              src={imagePath + "offer.png"}
              alt=" "
              className="img-responsive"
            />
          </div>
          <div className="agile_top_brand_left_grid1">
            <figure>
              <div className="snipcart-item block">
                <div className="snipcart-thumb">
                  <Link to="/products">
                    <img title=" " alt=" " src={imagePath + props.image} />
                  </Link>
                  <p>{props.title}</p>
                  <div className="stars">
                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                    <i className="fa fa-star gray-star" aria-hidden="true"></i>
                  </div>
                  <h4>
                    ${props.discountedPrice} <span>${props.initialPrice}</span>
                  </h4>
                </div>
                <div className="snipcart-details top_brand_home_details">
                  <form action="#" method="post">
                    <fieldset>
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="add" value="1" />
                      <input type="hidden" name="business" value=" " />
                      <input
                        type="hidden"
                        name="item_name"
                        value="basmati rise"
                      />
                      <input type="hidden" name="amount" value="30.99" />
                      <input
                        type="hidden"
                        name="discount_amount"
                        value="1.00"
                      />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input type="hidden" name="return" value=" " />
                      <input type="hidden" name="cancel_return" value=" " />
                      <input
                        type="submit"
                        name="submit"
                        value="Add to cart"
                        className="button"
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllProducts;