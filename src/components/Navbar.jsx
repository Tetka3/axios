import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/blogs"><li>Blogs</li></Link>
        <Link to="/comments"><li>Comments</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
