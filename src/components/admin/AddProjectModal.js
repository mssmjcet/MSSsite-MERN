import { useState } from "react";
const AddProjectModal=(props)=>{
    
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [projectImage,setProjectImage]=useState({preview:'',data:''});
    const [projectLink,setProjectLink]=useState('');
    const [loading,setLoading]=useState(false);
    const [status,setStatus]=useState("");
    

    const createNewProject = async (e) => {
        e.preventDefault()
        setLoading(true);
        let formData = new FormData();
        formData.append('Name',name);
        formData.append('Description',description);
        formData.append('ProjectLink',projectLink);   
        formData.append('ProjectImage', projectImage.data)
        console.log(formData);
        const response = await fetch(process.env.REACT_APP_BACKEND_API_URL+'/admin/Project', {
          method: 'POST',
          body: formData,
        })
        .then((data)=>data.json())
        .then((data)=>{
            setStatus(data.message)
            props.fetchProjectsData();
            // console.log('called fetch')
        })
        setLoading(false);
      }
      
      const handleFileChange = (e) => {
        const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        
        setProjectImage(img);
      }
    

    return(
        <>
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
        </>
    )
}

export default AddProjectModal;