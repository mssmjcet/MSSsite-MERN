import { useEffect, useState } from "react";

const EditProjectModal=(props)=>{

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [projectImage,setProjectImage]=useState({preview:'',data:''});
    const [projectLink,setProjectLink]=useState('');
    const [loading,setLoading]=useState(false);
    const [status,setStatus]=useState("");
    const [projectId,setProjectId]=useState(0);


    useEffect(()=>{
    if(props.projectId!=-1)
    {
        initializeProjectDetails(props.projectId);
    }
    },[props.projectId]);




    const updateProjectDetails = async (e) => {
        e.preventDefault();
        setLoading(true);
        let formData1 = new FormData();
        formData1.append('projectId',projectId);
        formData1.append('Name',name);
        formData1.append('Description',description);
        formData1.append('ProjectLink',projectLink);   
        if(projectImage.data==='')
            formData1.append('ProjectImage','Nil')
        else
            formData1.append('ProjectImage', projectImage.data);
        // console.log(formData1);
        // console.log(name);
        // for (var key of formData1.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }
        const response = await fetch(process.env.REACT_APP_BACKEND_API_URL+'/admin/Project', {
        method: 'PUT',
        body: formData1,
        })
        .then((data)=>data.json())
        .then((data)=>{
            setStatus(data.message)
            props.fetchProjectsData();
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

    function initializeProjectDetails(projectId)
    {
        let prgRecord=props.projectsData.find(prg=>prg._id===projectId);
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
            let eurl=process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH+prgRecord.Image;
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
            <>
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
                        <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter project Name" aria-label="participant name" aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Description</span>
                        <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter project description" aria-label="email Id" aria-describedby="basic-addon2"/>
                        </div>
                        
                    
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Project Link</span>
                        <input type="text" className="form-control" value={projectLink} onChange={(e)=>setProjectLink(e.target.value)} placeholder="Enter Project Link" aria-label="participant name" aria-describedby="basic-addon1"/>
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

        </>
    )
}

export default EditProjectModal;