import AddRegistrationModal from "./AddRegistrationModal";
import AdminNavbar from "./AdminNavbar";
import {useEffect, useState} from "react";
import EditRegistrationModal from "./EditRegistrationModal";

const RegistrationDashboard=()=>{

    const [regId,setRegId]=useState(-1);
    const [eventId,setEventId]=useState(0);
    const [eventData,setEventData]=useState([]);
    const [registrationData,setRegistrationData]=useState([]);
    const [searchInput,setSearchInput]=useState("");
    useEffect(()=>{
        fetchEventsData();
    },[]);
    
    const fetchEventsData=()=>{
        fetch('/api/admin/Event').then((res)=>res.json())
        .then((data)=>{
            if(data.eventData)
            setEventData(data.eventData);
            console.log(data);
            console.log(data.eventData);
        })
        console.log("fetched");
    }
    const fetchRegistrationsForEvent=(value)=>{
        const newEventId=value;
        setEventId(newEventId);

        //fetch registrations
        fetch('/api/admin/Registration/'+newEventId,{
        method: "GET",
        })
        .then((res) => res.json())
        .then((data)=> {
            setRegistrationData(data.regData);
            console.log(data);
           //setLoading(false);
        })
    }
    const deleteRegistrationRecord=(registrationId)=>{
        //fetch registrations
        fetch('/api/admin/Registration/'+registrationId,{
        method: "DELETE",
        })
        .then((res) => res.json())
        .then((data)=> {
            alert(data.message);
            console.log(data);
           //setLoading(false);
        })
    }
    const deleteRegistrationsForEvent=(e)=>{
        fetch('/api/admin/Registration/Event/'+eventId,{
        method: "DELETE",
        })
        .then((res) => res.json())
        .then((data)=> {
            alert(data.message);
            console.log(data);
           //setLoading(false);
        })
    }
    
    
    return(
        <>
        <AdminNavbar/>
        <div className="container-fluid">
                        {/* <!-- Button trigger modal --> */}
           

            {/* <!-- Modal- new registration details --> */}
            <AddRegistrationModal fetchRegistrationsForEvent={fetchRegistrationsForEvent} eventId={eventId} />
            {/* <!-- Modal -registration details update--> */}
            <EditRegistrationModal fetchRegistrationsForEvent={fetchRegistrationsForEvent} eventId={eventId} regId={regId} />
            
            <div className="h2 text-center ">Registration details</div>

            <div className="row my-5">
                <div className="col-3">
                </div>
                <div className="col-6 text-center">
                    <form>
                    <select className="form-control form-select" onChange={(e)=>fetchRegistrationsForEvent(e.target.value)}>
                        <option>Select a event</option>
                        {eventData.map((event)=>{
                            return <option value={event.id}>{event.name}</option>
                        })}

                    </select>
                    </form>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-danger" onClick={deleteRegistrationsForEvent}>
                        Delete All Registrations
                    </button>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-3">
                </div>
                <div className="col-6">
                    <input type="text" name="searchInput" className="form-control" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder="Enter a name to search" />
                </div>
                <div className="col-3">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#newRegistration">
                        Add new Registration
                    </button>
                </div>
            </div>
            
            <div className="row mx-2 border-2 border-rounded border-primary">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Roll No</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Payment Status</th>
                    <th scope="col">Payment Screenshot</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {registrationData?.map((registration,index)=>{
                        return(
                            <tr>
                    <th scope="row">{index+1}</th>
                    <td>{registration.nameOfParticipant}</td>
                    <td>{registration.rollNumber}</td>
                    <td>{registration.emailId}</td>
                    <td>{registration.phoneNumber}</td>
                    <td>{registration.paymentStatus}</td>
                    <td><img src={"/images/uploaded/"+registration.paymentFile}/></td>
                    <td>
                        <button className="btn btn-success" onClick={()=>setRegId(registration._id)} data-bs-toggle="modal" data-bs-target="#updateRegistration">Edit</button>
                        <button className="btn btn-danger" onClick={()=>deleteRegistrationRecord(registration._id)}>Delete</button>
                    </td>
                    </tr>
                        );
                    })

                    }
                </tbody>
            </table>
            {registrationData.length===0 &&
                <div className="text-center">No registrations for the selected event. :(</div>
            }
        </div>
    </div>
    </>
    );
}

export default RegistrationDashboard;
