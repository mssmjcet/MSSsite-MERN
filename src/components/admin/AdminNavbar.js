import { Link, NavLink } from "react-router-dom";

const AdminNavbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <Link className="navbar-brand text-warning fw-bold mx-2 fs-3" to="/admin/home">MSS MJCET</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav justify-content-around w-100">
      <NavLink className="btn btn-outline-light border-0 fw-bold fs-5" to="/admin/home">Home </NavLink>
      <NavLink className="btn btn-outline-light border-0 fw-bold fs-5" to="/admin/registrationsDashboard">Registrations</NavLink>
      <NavLink className="btn btn-outline-light border-0 fw-bold fs-5" to="/admin/eventsDashboard">Events</NavLink>
      <NavLink className="btn btn-outline-light border-0 fw-bold fs-5" to="/admin/projectsDashboard">Projects</NavLink>
    </div>
  </div>
</nav>
    );
}
export default AdminNavbar;