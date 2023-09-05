import { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const AdminHome=()=>{
    const [status,setStatus]=useState("");
    const createFiles=(evt)=>{
        evt.preventDefault();
        fetch(process.env.REACT_APP_BACKEND_API_URL+'/admin/save', {
            method: 'POST',
            body: {},
          })
          .then((data)=>data.json())
          .then((data)=>{
            setStatus(data.message)
            console.log(data)
        });
        console.log('hello')
    }
    return(
        <>
        <AdminNavbar/>
        <div className="container-fluid"> 
            <h1>Admin Home Page</h1>
            <p>Click the button to create local json data files with the changes for data in database. 
                These files can be used for static frontend deployment without requiring backend communication.
                Files are saved in /public/jsonFiles/ folder</p>
            <button role="button" className="btn btn-primary" onClick={(evt)=>createFiles(evt)}>Save Changes</button>
            <div>{status!=='' && <p>{status}</p>}</div>
        </div>
        </>
    )
}

export default AdminHome;