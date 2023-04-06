import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CLIENT } from "../queries/clientQueries";
import { UPDATE_CLIENT } from "../mutations/clientMutations";
import Spinner from "../components/Spinner";

const EditClient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_CLIENT, { variables: { id } });

  const [name, setName] = useState(data.client.name);
  const [email, setEmail] = useState(data.client.email);
  const [phone, setPhone] = useState(data.client.phone);

  const [updateClient] = useMutation(UPDATE_CLIENT, {
    variables: { id: data.client.id, name, email, phone },
    refetchQueries: [{ query: GET_CLIENT, variables: { id: data.client.id } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      return alert("Please fill in all fields");
    }

    updateClient(name, email, phone);
    navigate(`/client/${id}`);
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error...</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card text-bg-dark p-5">
          <Link
            to={`/client/${id}`}
            className="btn btn-secondary btn-sm w-25 d-inline ms-auto"
          >
            Back
          </Link>
          <div className="mt-4">
            <h2 className="mt-3">Edit Client Details</h2>
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
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-4 d-flex ms-auto"
              >
                Update Client
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditClient;
