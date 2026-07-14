import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1>Pet Boarding Management System</h1>

        <p className="mt-3">
          Manage Pet Boarding Reservations
        </p>

        <Link
          className="btn btn-success me-3"
          to="/add-pet"
        >
          Add Pet
        </Link>

        <Link
          className="btn btn-primary"
          to="/view-pets"
        >
          View Pets
        </Link>

      </div>

    </div>
  );
};

export default Home;