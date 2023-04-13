import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { FaEdit, FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

const ClientRow = ({ client }) => {
  const navigate = useNavigate();

  const viewClient = () => {
    navigate(`/client/${client.id}`);
  };

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }], // This is not needed because we are using the cache
    //
    // // does not work unless page is refreshed ???
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    //   const { projects } = cache.readQuery({ query: GET_PROJECTS });
    //   cache.writeQuery({
    //     query: GET_PROJECTS,
    //     data: {
    //       projects: projects.filter(
    //         (project) => project.client.id !== deleteClient.id
    //       ),
    //     },
    //   });
    // },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td className="d-flex justify-content-evenly">
        <button className="btn btn-primary btn-sm" onClick={viewClient}>
          <FaEdit />
        </button>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
