import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

const ProjectsDashBoard=()=>{
    
const [name,setName]=useState("");
const [description,setDescription]=useState("");
const [projectImage,setProjectImage]=useState({preview:'',data:''});
const [projectLink,setProjectLink]=useState('');
const [loading,setLoading]=useState(false);
const [status,setStatus]=useState("");
const [projectId,setProjectId]=useState(0);
const [projectsData,setProjectsData]=useState([
    {
        id:1,
        name:'induction',
    },
    {
        id:2,
        name:'membership',
    },
]);


useEffect(()=>{
    fetchProjectsData();
},[]);

const fetchProjectsData=()=>{
    fetch('/api/admin/Project').then((res)=>res.json())
    .then((data)=>{
        if(data.projectsData)
        setProjectsData(data.projectsData);
        console.log(data);
        console.log(data.projectsData);
    })
    console.log("fetched");
}

const deleteProject=(ProjectId)=>{
    //fetch registrations
    fetch('/api/admin/Project/'+ProjectId,{
    method: "DELETE",
    })
    .then((res) => res.json())
    .then((data)=> {
        alert(data.message);
        console.log(data);
       //setLoading(false);
    })
}


const createNewProject = async (e) => {
    e.preventDefault()
    setLoading(true);
    let formData = new FormData();
    formData.append('Name',name);
    formData.append('Description',description);
    formData.append('ProjectLink',projectLink);   
    formData.append('Image', projectImage.data)
    console.log(formData);
    const response = await fetch('/api/admin/Project', {
      method: 'POST',
      body: formData,
    })
    .then((data)=>data.json())
    .then((data)=>setStatus(data.message))
    setLoading(false);
  }
  
  const updateProjectDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    let formData1 = new FormData();
    formData1.append('projectId',projectId);
    formData1.append('Name',name);
    formData1.append('Description',description);
    formData1.append('ProjectLink',projectLink);   
    formData1.append('Image', projectImage.data);
    console.log(formData1);
    console.log(name);
    for (var key of formData1.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    const response = await fetch('/api/admin/Project', {
      method: 'PUT',
      body: formData1,
    })
    .then((data)=>data.json())
    .then((data)=>setStatus(data.message))
    setLoading(false);
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    
    setProjectImage(img);
  }

  function initializeProjectDetails(projectId)
  {
    let prgRecord=projectsData.find(prg=>prg._id===projectId);
    console.log(prgRecord);
    setProjectId(prgRecord._id);
    setDescription(prgRecord.Description);
    setName(prgRecord.Name);
    setProjectLink(prgRecord.ProjectLink);
    if(prgRecord.Image==='Nil')
    {
        const img={
            preview:'',
            data:'',
        };
        setProjectImage(img);
         console.log(projectImage);
    }
    else
    {
        let eurl="/images/"+prgRecord.Image;
        console.log(eurl);
        const img = {
            preview: eurl,
            data: prgRecord.Image,
          }              
          setProjectImage(img);
          console.log(projectImage);
    }
    console.log("initialized successfully");
  }

return(
    <div className="container-fluid">
                    {/* <!-- Button trigger modal --> */}
       

        {/* <!-- Modal- new project details --> */}
        <div className="modal fade" id="newProject" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add New Project Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form encType="multipart/form-data">
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Enter project Name" aria-label="participant name" aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Description</span>
                    <textarea className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="Enter project description" aria-label="email Id" aria-describedby="basic-addon2"/>
                    </div>
                    
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Project Link</span>
                    <input type="text" className="form-control" onChange={(e)=>setProjectLink(e.target.value)} placeholder="Enter Project Link" aria-label="participant name" aria-describedby="basic-addon1"/>
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload project Image</label>
                    <input className="form-control" type="file" id="formFile" onChange={handleFileChange}/>
                    </div>
                    {projectImage.preview!=='' && <img className="img-fluid" src={projectImage.preview} />} 
                </form>
            </div>
            <div className="modal-footer">
            { loading && <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
            {status && <div className="text-center bg-info">{status}</div>}
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={createNewProject}>Create</button>
            </div>
            </div>
        </div>
        </div>
        
        {/* <!-- Modal Project details update--> */}
        <div className="modal fade" id="updateProject" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Project Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form encType="multipart/form-data">
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter event Name" aria-label="participant name" aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Description</span>
                    <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter event description" aria-label="email Id" aria-describedby="basic-addon2"/>
                    </div>
                    
                   
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Project Link</span>
                    <input type="text" className="form-control" value={projectLink} onChange={(e)=>setProjectLink(e.target.value)} placeholder="Enter Payment Number" aria-label="participant name" aria-describedby="basic-addon1"/>
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload Project Image</label>
                    <input className="form-control" type="file" id="formFile" onChange={handleFileChange}/>
                    </div>
                    {projectImage.preview!=='' && <img alt="image not loaded" className="img-fluid" src={projectImage.preview} />} 
                </form>
            </div>
            <div className="modal-footer">
            { loading && <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
            {status && <div className="text-center bg-info">{status}</div>}
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={updateProjectDetails}>Update</button>
            </div>
            </div>
        </div>
        </div>

        <AdminNavbar/>
        <div className="row">
            <div className="col-6">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#newProject">
                    Add new Project
                </button>
                {/* <button type="button" className="btn btn-success" onClick={deleteRegistrationsForEvent}>
                    Delete All Events
                </button> */}
            </div>
        </div>
        <div className="h2 text-center ">Projects</div>
        <div className="row mx-2 border-2 border-rounded border-primary">
        
        {projectsData && projectsData.map((prg)=>{
            return(
                <div className="col-sm-6">
                <div className="card mb-3">
                <img src={"/images/uploaded/"+prg.Image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{prg.Name}</h5>
                    <p className="card-text">{prg.Description}</p>
                    <p className="card-text">Project Link:{prg.ProjectLink}</p>
                    <button className="btn btn-success" onClick={()=>initializeProjectDetails(prg._id)} data-bs-toggle="modal" data-bs-target="#updateProject">Edit</button>
                    <button className="btn btn-danger" onClick={()=>deleteProject(prg._id)}>Delete</button>
                </div>
                </div>
                </div>
            );
        })}
    </div>
</div>
);
}
export default ProjectsDashBoard;