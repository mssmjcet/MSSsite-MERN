import { useState } from "react";
const AddMemberModal=(props)=>{
    
    const [name,setName]=useState("");
    const [positionName,setPositionName]=useState("");
    const [memberImage,setMemberImage]=useState({preview:'',data:''});
    const [positionType,setPositionType]=useState('');
    const [loading,setLoading]=useState(false);
    const [status,setStatus]=useState("");
    

    const createNewMember = async (e) => {
        e.preventDefault()
        setLoading(true);
        let formData = new FormData();
        formData.append('Name',name);
        formData.append('PositionName',positionName);
        formData.append('PositionType',positionType);   
        formData.append('MemberImage', memberImage.data)
        console.log(formData);
        const response = await fetch(process.env.REACT_APP_BACKEND_API_URL+'/admin/Team', {
          method: 'POST',
          body: formData,
        })
        .then((data)=>data.json())
        .then((data)=>{
            setStatus(data.message)
            props.fetchTeamsData();
            // console.log('called fetch')
        })
        setLoading(false);
      }
      
      const handleFileChange = (e) => {
        const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        
        setMemberImage(img);
      }
    

    return(
        <>
         <div className="modal fade" id="newMember" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add New Member Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form encType="multipart/form-data">
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" aria-label="participant name" aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Position Name</span>
                    <input type="text" className="form-control" onChange={(e)=>setPositionName(e.target.value)} placeholder="Enter name of position" aria-label="position name" aria-describedby="basic-addon2"/>
                    </div>
                    
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Position Type</span>
                    <select className="form-select" onChange={(e)=>setPositionType(e.target.value)} aria-label="position type" aria-describedby="basic-addon1">
                        <option value={''}>Select Position Type</option>
                        <option value={'Governing_Body'}>Governing Body</option>
                        <option value={'Execom'}>Execom</option>
                        <option value={'Faculty_Coordinator'}>Faculty Coordinator</option>
                    </select>
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload Member Image</label>
                    <input className="form-control" type="file" id="formFile" onChange={handleFileChange}/>
                    </div>
                    {memberImage.preview!=='' && <img className="img-fluid" src={memberImage.preview} />} 
                </form>
            </div>
            <div className="modal-footer">
            { loading && <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
            {status && <div className="text-center bg-info">{status}</div>}
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={createNewMember}>Create</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default AddMemberModal;