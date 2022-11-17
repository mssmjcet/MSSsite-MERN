const AdminNavbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand" href="#">MSS MJCET</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/admin/home">Home </a>
      <a className="nav-item nav-link active" href="#">Registrations<span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/admin/eventsDashboard">Events</a>
    </div>
  </div>
</nav>
    );
}
export default AdminNavbar;