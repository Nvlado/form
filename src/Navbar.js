import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">Homepage</Link>
            <Link to="/create">New Blog</Link>
        </nav>
     );
}
 
export default Navbar;