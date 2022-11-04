const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand" href="#">MSS MJCET</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="/admin/home">Home </a>
      <a class="nav-item nav-link active" href="#">Registrations<span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/admin/eventsDashboard">Events</a>
    </div>
  </div>
</nav>
    );
}
export default Navbar;