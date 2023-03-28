import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutations";

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
    // update(cache) {
    //   const { projects } = cache.readQuery({ query: GET_PROJECTS });
    //   cache.writeQuery({
    //     query: GET_PROJECTS,
    //     data: { projects: projects.filter((p) => p.id !== projectId) },
    //   });
    // },
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger btn-sm m-2" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
