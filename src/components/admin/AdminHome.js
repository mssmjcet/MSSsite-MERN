import { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const AdminHome=()=>{
    const [status,setStatus]=useState("");
    const createFiles=async()=>{
        const response = await fetch('/api/admin/save', {
            method: 'POST',
            body: {},
          })
          .then((data)=>data.json())
          .then((data)=>setStatus(data.message))
    }
    return(
        <>
        <AdminNavbar/>
        <div className="container-fluid"> 
            <h1>Admin Home Page</h1>
            <p>Click the button to create all files with the changes for data in database</p>
            <button onClick={createFiles}>Save Changes</button>
            {status!=='' && <p>{status}</p>}
        </div>
        </>
    )
}

export default AdminHome;