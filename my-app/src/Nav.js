import { NavLink } from "react-router-dom";
import './nav.css';

export default function Nav() {
    return (
        <div className="Main">
            <nav className="text">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/newuser">New User</NavLink>
            </nav>
        </div>
    );
}
  