import NavProfile from "../Profile/NavProfile";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>SD</div>
      <div>Kammming</div>
      <NavProfile />
    </nav>
  );
}