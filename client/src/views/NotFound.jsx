import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle size="8rem" className="text-warning" />
      <h1 style={{ color: "whitesmoke" }}>404</h1>
      <h3 style={{ color: "whitesmoke" }}>Page Not Found</h3>
      <Link to="/" className="btn btn-danger btn-lg mt-3">
        Home Page
      </Link>
    </div>
  );
};

export default NotFound;
