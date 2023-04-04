import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CLIENT } from "../queries/clientQueries";
import { FaEdit } from "react-icons/fa";
import Spinner from "../components/Spinner";

const Client = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_CLIENT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Error...</p>;

  return (
    <div className="mx-auto w-75 card text-bg-dark p-5">
      <Link to="/" className="btn btn-secondary btn-sm w-25 d-inline ms-auto">
        Back
      </Link>

      <h1>{data.client.name}</h1>

      <hr />

      <h5 className="mt-3">Client Email</h5>
      <p className="lead">{data.client.email}</p>

      <h5 className="mt-3">Client Phone</h5>
      <p className="lead">{data.client.phone}</p>

      <hr />

      <div className="d-flex mt-5 ms-auto">
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => navigate(`/editClient/${id}`)}
        >
          <FaEdit className="icon" /> Edit Client
        </button>
      </div>
    </div>
  );
};

export default Client;
