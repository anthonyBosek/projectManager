import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";
import Spinner from "../components/Spinner";

const EditProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_PROJECT, { variables: { id } });

  const [name, setName] = useState(data.project.name);
  const [description, setDescription] = useState(data.project.description);
  const [status, setStatus] = useState("progress");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: data.project.id, name, description, status },
    refetchQueries: [
      { query: GET_PROJECT, variables: { id: data.project.id } },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert("Please fill in all fields");
    }

    updateProject(name, description, status);
    navigate(`/project/${id}`);
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error...</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card text-bg-dark p-5">
          <Link
            to={`/project/${id}`}
            className="btn btn-secondary btn-sm w-25 d-inline ms-auto"
          >
            Back
          </Link>
          <div className="mt-4">
            <h2 className="mt-3">Edit Project Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  id="status"
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="new">Not Started</option>
                  <option value="progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-4 d-flex ms-auto"
              >
                Update Project
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProjectForm;
