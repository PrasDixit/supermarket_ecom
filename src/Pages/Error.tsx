import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div style={{ textAlign: "center", padding: 100 }}>
        <h1>404 Error- Page Not Found</h1>
        <Link style={{ fontSize: 40 }} to="/">
          Return to Home
        </Link>
      </div>
    </>
  );
};

export default Error;
