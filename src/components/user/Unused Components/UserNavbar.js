import { Link } from "react-router-dom";

const UserNavbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <Link className="navbar-brand" to="/">MSS MJCET</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home </Link>
      <Link className="nav-item nav-link" to="/events">Events</Link>
      <Link className="nav-item nav-link" to="/projects">Projects</Link>
      <Link className="nav-item nav-link" to="/teams">Teams</Link>
      <Link className="nav-item nav-link" to="/register">Register</Link>
    </div>
  </div>
</nav>
    );
}
export default UserNavbar;