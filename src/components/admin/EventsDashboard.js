import AdminNavbar from "./AdminNavbar";

const EventsDashboard=()=>{
    return(
    <div className="container-fluid">
        <AdminNavbar/>
        <h1 className="text-center bg-primary">Events Dashboard</h1>
        <div className="flex flex-wrap">
            <div className="flex-item"></div>
            <div className="flex-item"></div>
        </div>

    </div>
);
}
export default EventsDashboard;