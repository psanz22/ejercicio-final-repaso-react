import { Link } from "react-router-dom";

function UserItem({ userData }) {
  return (
    <li>
      <Link to={`/user/${userData.id}`}>
        <img src={userData.picture} alt={userData.name} />
        <h4>{userData.name}</h4>
        <p>{userData.city}</p>
        <p>{userData.age}</p>
      </Link>
    </li>
  );
}

export default UserItem;
