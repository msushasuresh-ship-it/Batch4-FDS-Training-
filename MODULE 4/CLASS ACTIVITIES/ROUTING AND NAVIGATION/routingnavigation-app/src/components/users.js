import { Link } from "react-router-dom";

function Users() {

  const users = [
    { id: 1, name: "anu" },
    { id: 2, name: "Deva" },
    { id: 3, name: "Yazh" }
  ];

  return (
    <div className="page">

      <h1>Users</h1>

      <div className="card-container">

        {users.map((user) => (

          <div className="card" key={user.id}>

            <h2>{user.name}</h2>

            <p>User ID: {user.id}</p>

            <Link
              className="view-btn"
              to={`/users/${user.id}`}
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Users;