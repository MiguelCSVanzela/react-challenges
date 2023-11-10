import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contato">Contact</Link>
        </li>
        <li>
          <Link to="/sobre">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
