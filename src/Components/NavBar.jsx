import smallLogo from "./../assets/toudou-small logo.png";
import loupe from "./../assets/image copy.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navBar">
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

      <div>
        <button>
          <img src={loupe} alt="" height={`20px`} width={`20px`} />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
