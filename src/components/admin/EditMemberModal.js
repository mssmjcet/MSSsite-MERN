import { useEffect, useState } from "react";

const EditMemberModal=(props)=>{

    const [name,setName]=useState("");
    const [positionName,setPositionName]=useState("");
    const [memberImage,setMemberImage]=useState({preview:'',data:''});
    const [positionType,setPositionType]=useState('');
    const [loading,setLoading]=useState(false);
    const [status,setStatus]=useState("");
    const [memberId,setMemberId]=useState(0);


    useEffect(()=>{
    if(props.memberId!=-1)
    {
        initializeMemberDetails(props.memberId);
    }
    },[props.memberId]);




    const updateMemberDetails = async (e) => {
        e.preventDefault();
        setLoading(true);
        let formData1 = new FormData();
        formData1.append('memberId',memberId);
        formData1.append('Name',name);
        formData1.append('PositionName',positionName);
        formData1.append('PositionType',positionType);   
        if(memberImage.data==='')
            formData1.append('MemberImage','Nil')
        else
            formData1.append('MemberImage', memberImage.data);
        // console.log(formData1);
        // console.log(name);
        // for (var key of formData1.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }
        const response = await fetch(process.env.REACT_APP_BACKEND_API_URL+'/admin/Team', {
        method: 'PUT',
        body: formData1,
        })
        .then((data)=>data.json())
        .then((data)=>{
            setStatus(data.message)
            props.fetchTeamsData();
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

    function initializeMemberDetails(memberId)
    {
        let memRecord=props.membersData.find(mem=>mem._id===memberId);
        // console.log(memRecord);
        setMemberId(memRecord._id);
        setPositionName(memRecord.PositionName);
        setName(memRecord.Name);
        setPositionType(memRecord.PositionType);
        if(memRecord.ImgUrl==='Nil')
        {
            const img={
                preview:'',
                data:'',
            };
            setMemberImage(img);
            // console.log(memberImage);
        }
        else
        {
            let eurl=process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH+memRecord.ImgUrl;
            console.log(eurl);
            const img = {
                preview: eurl,
                data: memRecord.ImgUrl,
            }              
            setMemberImage(img);
            // console.log(memberImage);
        }
        console.log("initialized successfully");
    }


        return(
            <>
            <div className="modal fade" id="updateMember" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Member Details</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form encType="multipart/form-data">
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                        <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Member Name" aria-label="participant name" aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Position Name</span>
                        <textarea className="form-control" value={positionName} onChange={(e)=>setPositionName(e.target.value)} placeholder="Enter position Name" aria-label="position name" aria-describedby="basic-addon2"/>
                        </div>
                        
                    
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Position Type</span>
                        <select className="form-select" value={positionType} onChange={(e)=>setPositionType(e.target.value)}  aria-label="participant name" aria-describedby="basic-addon1">
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
                        {memberImage.preview!=='' && <img alt="image not loaded" className="img-fluid" src={memberImage.preview} />} 
                    </form>
                </div>
                <div className="modal-footer">
                { loading && <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
                {status && <div className="text-center bg-info">{status}</div>}
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={updateMemberDetails}>Update</button>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default EditMemberModal;