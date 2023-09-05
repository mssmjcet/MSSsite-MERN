import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddMemberModal from "./AddMemberModal";
import EditMemberModal from "./EditMemberModal";

const TeamsDashBoard=()=>{
const BASE_URL=process.env.REACT_APP_BACKEND_API_URL +'/admin/Team'
const [searchInput,setSearchInput]=useState("");
const [memberId,setMemberId]=useState(-1);
const [membersData,setMembersData]=useState([]);


useEffect(()=>{
    fetchTeamsData();
},[]);

const fetchTeamsData=()=>{
    fetch(BASE_URL).then((res)=>res.json())
    .then((data)=>{
        if(data.membersData)
        setMembersData(data.membersData);
        console.log(data);
    })
    console.log("fetched");
}

const deleteMember=(MemberId)=>{
    
    fetch(BASE_URL + '/'+MemberId,{
    method: "DELETE",
    })
    .then((res) => res.json())
    .then((data)=> {
        alert(data.message);
        console.log(data);
        fetchTeamsData();
    })
}


return(
    <>
    <AdminNavbar/>
    <div className="container-fluid">

        {/* <!-- Modal- new member details --> */}
        
        <AddMemberModal fetchTeamsData={fetchTeamsData}/>
        {/* <!-- Modal member details update--> */}
        <EditMemberModal fetchTeamsData={fetchTeamsData} memberId={memberId} membersData={membersData} />
        
        <div className="h2 text-center my-5">Teams</div>
        <div className="row my-5">
            <div className="col-3">

            </div>
            <div className="col-6">
                <input className="form-control m-1" type="text" name="searchInput" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder="Enter a member's name to search" />
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#newMember">
                    Add new Member
                </button>
                
            </div>
        </div>
        
        <div className="row mx-2 border-2 border-rounded border-primary">
        {membersData.length===0 &&
            <div className="text-center">No members available to display. Please add some members :)</div>
        }
        {membersData?.map((mem)=>{
            if(searchInput==="" || mem.Name.toLowerCase().includes(searchInput))
            return(
                <div className="col-sm-3">
                <div className="card m-3 h-100">
                
                    <img src={process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH + mem.ImgUrl} className="card-img-top" alt="..."/>
                
                    <div className="card-body">
                        <h5 className="card-title"><span className="fw-bold">Name:</span> {mem.Name}</h5>
                        <p className="card-text"><span className="fw-bold">Position Name:</span> {mem.PositionName}</p>
                        <p className="card-text"><span className="fw-bold">Position Type:</span> {mem.PositionType} </p>
                    </div>
                    <div className="card-footer bg-light d-flex">
                        <button className="btn btn-success m-1 col-6" onClick={()=>setMemberId(mem._id)} data-bs-toggle="modal" data-bs-target="#updateMember">Edit</button>
                        <button className="btn btn-danger m-1 col-6" onClick={()=>deleteMember(mem._id)}>Delete</button>
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
export default TeamsDashBoard;