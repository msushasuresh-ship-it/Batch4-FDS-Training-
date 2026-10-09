import { useParams, Link } from "react-router-dom";

function UserDetails() {

  const { id } = useParams();

  return (
    <div className="page">

      <div className="box">

        <h1>User Details</h1>

        <h2>User ID: {id}</h2>

        <p>
          This page is created using a dynamic route.
        </p>

        <Link className="view-btn" to="/users">
          ← Back to Users
        </Link>

      </div>

    </div>
  );
}

export default UserDetails;