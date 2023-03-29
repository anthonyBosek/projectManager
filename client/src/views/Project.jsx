import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FaEdit } from "react-icons/fa";
import { GET_PROJECT } from "../queries/projectQueries";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
// import EditProjectForm from "../components/EditProjectForm";
import DeleteProjectButton from "../components/DeleteProjectButton";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Error...</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card text-bg-dark p-5">
          <Link
            to="/"
            className="btn btn-secondary btn-sm w-25 d-inline ms-auto"
          >
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>

          <hr />

          <ClientInfo client={data.project.client} />

          <div className="d-flex mt-5 ms-auto">
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => navigate(`/edit/${id}`)}
            >
              <FaEdit className="icon" /> Edit Project
            </button>

            <DeleteProjectButton projectId={id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
