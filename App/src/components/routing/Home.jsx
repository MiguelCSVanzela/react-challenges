import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <div>
      <h2>Initial Page</h2>
      <ul>
        <li>
          <Link to="/Historia">Historia</Link>{" "}
        </li>
        <li>
          <Link to="/Amigos">Amigos</Link>
        </li>
      </ul>
      <SearchForm />
    </div>
  );
};

export default Home;
