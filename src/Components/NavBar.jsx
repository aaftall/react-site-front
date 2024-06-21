import smallLogo from "./../assets/toudou-small logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navBar">
      {/* <div></div> */}
      <div className="title">
        <Link to="/">
          <img src={smallLogo} className="logo" alt="small-logo" />
        </Link>
      </div>
      <ul className="tabs">
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>

      <div
        className="loupe"
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: "red",
        }}
      ></div>
    </nav>
  );
}

export default NavBar;
