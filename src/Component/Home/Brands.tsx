import { Link } from "react-router-dom";

const Brands = (props: any) => {
  return (
    <div className="col-md-4 w3layouts-brand">
      <div className="brands-w3l">
        <p>
          <Link to={`/${props.title.replace(/ /g, "").toLowerCase()}`}>
            {props.title}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Brands;
