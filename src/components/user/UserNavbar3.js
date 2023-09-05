import { Link, NavLink } from "react-router-dom";
const UserNavbar3=()=>{

    return(
        <nav className="navbar navbar-expand-xxl" style={{backgroundColor:"#e5e5e5"}}>
            <div className="container-fluid">
                    <Link  className="navbar-brand" to="/" >
                        <img width="12%" className="img-fluid object-fit-contain" src="/assets/images/mss-logo4.png" alt=""/>
                        <span className="d-inline fs-5 ms-2 fw-bold">MSS MJCET</span>
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapseContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapseContent">
                    <ul className="navbar-nav justify-content-between w-100">
                        <li className="">
                            <NavLink to="/" className="btn btn-outline-dark border-0 fw-bold fs-5">Home</NavLink>
                        </li>
                        <li className="">        
                            <NavLink to="/events" className="btn btn-outline-dark border-0 fw-bold fs-5">Events</NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/teams" className="btn btn-outline-dark border-0 fw-bold fs-5">Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className="btn btn-outline-dark border-0 fw-bold fs-5">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className="btn btn-outline-dark border-0 fw-bold fs-5">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default UserNavbar3;