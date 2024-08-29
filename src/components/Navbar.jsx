import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/"><li>Blogs</li></Link>
        <Link to="/"><li>Comments</li></Link>
        <Link to="/"><li>About</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
