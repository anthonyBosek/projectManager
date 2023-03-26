import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-3">Client Information</h5>
      <ul className="list-group w-50">
        <li className="list-group-item list-group-item-dark">
          <FaIdBadge className="icon" /> {client.name}
        </li>
        <li className="list-group-item list-group-item-dark">
          <FaEnvelope className="icon" /> {client.email}
        </li>
        <li className="list-group-item list-group-item-dark">
          <FaPhone className="icon" /> {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
