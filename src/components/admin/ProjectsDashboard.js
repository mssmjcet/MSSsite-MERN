import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddProjectModal from "./AddProjectModal";
import EditProjectModal from "./EditProjectModal";

const ProjectsDashBoard=()=>{
const BASE_URL=process.env.REACT_APP_BACKEND_API_URL +'/admin/Project'
const [searchInput,setSearchInput]=useState("");
const [projectId,setProjectId]=useState(-1);
const [projectsData,setProjectsData]=useState([]);


useEffect(()=>{
    fetchProjectsData();
},[]);

const fetchProjectsData=()=>{
    fetch(BASE_URL).then((res)=>res.json())
    .then((data)=>{
        if(data.projectsData)
        setProjectsData(data.projectsData);
        // console.log(data);
        // console.log(data.projectsData);
    })
    console.log("fetched");
}

const deleteProject=(ProjectId)=>{
    
    fetch(BASE_URL + '/'+ProjectId,{
    method: "DELETE",
    })
    .then((res) => res.json())
    .then((data)=> {
        alert(data.message);
        console.log(data);
        fetchProjectsData();
    })
}


return(
    <>
    <AdminNavbar/>
    <div className="container-fluid">
                    {/* <!-- Button trigger modal --> */}
       

        {/* <!-- Modal- new project details --> */}
        
        <AddProjectModal fetchProjectsData={fetchProjectsData}/>
        {/* <!-- Modal Project details update--> */}
        <EditProjectModal fetchProjectsData={fetchProjectsData} projectId={projectId} projectsData={projectsData} />
        
        <div className="h2 text-center my-5">Projects</div>
        <div className="row my-5">
            <div className="col-3">

            </div>
            <div className="col-6">
                <input className="form-control m-1" type="text" name="searchInput" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder="Enter a project name to search" />
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#newProject">
                    Add new Project
                </button>
                {/* <button type="button" className="btn btn-danger m-1">
                 onClick={deleteRegistrationsForEvent}>
                    Delete All Projects
                </button> */}
            </div>
        </div>
        
        <div className="row mx-2 border-2 border-rounded border-primary">
        {projectsData.length===0 &&
            <div className="text-center">No projects available to display. Please add some projects :)</div>
        }
        {projectsData?.map((prg)=>{
            if(searchInput==="" || prg.Name.includes(searchInput))
            return(
                <div className="col-sm-4">
                <div className="card m-3 h-100">
                
                    <img src={process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH + prg.Image} className="card-img-top" alt="..."/>
                
                    <div className="card-body">
                        <h5 className="card-title">{prg.Name}</h5>
                        <p className="card-text">{prg.Description}</p>
                        <p className="card-text"><span className="fw-bold">Project Link:</span> <a href={prg.ProjectLink} target="_blank">{prg.ProjectLink}</a> </p>
                    </div>
                    <div className="card-footer bg-light d-flex">
                        <button className="btn btn-success m-1 col-6" onClick={()=>setProjectId(prg._id)} data-bs-toggle="modal" data-bs-target="#updateProject">Edit</button>
                        <button className="btn btn-danger m-1 col-6" onClick={()=>deleteProject(prg._id)}>Delete</button>
                    </div>
                </div>
                </div>
            );
        })}
    </div>
</div>
</>
);
}
export default ProjectsDashBoard;