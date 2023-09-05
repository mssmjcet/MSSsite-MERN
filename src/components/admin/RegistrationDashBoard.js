import AddRegistrationModal from "./AddRegistrationModal";
import AdminNavbar from "./AdminNavbar";
import {useEffect, useState} from "react";
import EditRegistrationModal from "./EditRegistrationModal";

const RegistrationDashboard=()=>{
    const BASE_URL=process.env.REACT_APP_BACKEND_API_URL + '/admin/Registration'
    const [regId,setRegId]=useState(-1);
    const [eventId,setEventId]=useState(0);
    const [eventData,setEventData]=useState([]);
    const [registrationData,setRegistrationData]=useState([]);
    const [searchInput,setSearchInput]=useState("");
    const [eventName,setEventName]=useState("");

    useEffect(()=>{
        fetchEventsData();
    },[]);
    
    const fetchEventsData=()=>{
        fetch(process.env.REACT_APP_BACKEND_API_URL + '/admin/Event').then((res)=>res.json())
        .then((data)=>{
            if(data.eventsData)
            setEventData(data.eventsData);
            console.log(data);
            console.log(data.eventsData);
        })
        console.log("fetched");
    }
   
    const fetchRegistrationsForEvent=(value)=>{
        const newEventId=value;
        setEventId(newEventId);
        setEventName(eventData.find((evt)=>evt._id===value)?.Name)
        
        
        fetch(BASE_URL+'/'+newEventId,{
        method: "GET",
        })
        .then((res) => res.json())
        .then((data)=> {
            setRegistrationData(data.regData);
            console.log(data);
           
        })
    }
    const deleteRegistrationRecord=(registrationId)=>{
        
        fetch(BASE_URL+'/'+registrationId,{
        method: "DELETE",
        })
        .then((res) => res.json())
        .then((data)=> {
            alert(data.message);
            console.log(data);
         
           fetchRegistrationsForEvent(eventId);
        })
    }
    const deleteRegistrationsForEvent=(e)=>{
        fetch(BASE_URL + '/Event/'+eventId,{
        method: "DELETE",
        })
        .then((res) => res.json())
        .then((data)=> {
            alert(data.message);
            console.log(data);
        
           fetchRegistrationsForEvent(eventId);
        })
    }
    
    
    return(
        <>
        <AdminNavbar/>
        <div className="container-fluid">
        
            {/* <!-- Modal- new registration details --> */}
            <AddRegistrationModal fetchRegistrationsForEvent={fetchRegistrationsForEvent} eventId={eventId} eventName={eventName} />
            {/* <!-- Modal -registration details update--> */}
            <EditRegistrationModal fetchRegistrationsForEvent={fetchRegistrationsForEvent} eventId={eventId} eventName={eventName} regId={regId} registrationData={registrationData} />
            
            <div className="h2 text-center my-5">Registration details</div>

            <div className="row my-5">
                <div className="col-3">
                </div>
                <div className="col-6 text-center">
                    <form>
                    <select className="form-control form-select" onChange={(e)=>fetchRegistrationsForEvent(e.target.value)}>
                        <option>Select a event</option>
                        {eventData.map((evt)=>{
                            return <option value={evt._id}>{evt.Name}</option>
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
                    <input type="text" name="searchInput" className="form-control" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder="Enter a name/email/phone_no/roll_no to filter" />
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
                    {registrationData?.map((reg,index)=>{
                        if(searchInput==="" || reg.nameOfParticipant.includes(searchInput) || reg.rollNumber.toString().includes(searchInput) || reg.emailId.includes(searchInput) || reg.phoneNumber.includes(searchInput))
                        return(
                            <tr>
                    <th scope="row">{index+1}</th>
                    <td>{reg.nameOfParticipant}</td>
                    <td>{reg.rollNumber}</td>
                    <td>{reg.emailId}</td>
                    <td>{reg.phoneNumber}</td>
                    <td>{reg.paymentStatus}</td>
                    <td><img src={process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH + reg.paymentFile} className="img-fluid" /></td>
                    <td>
                        <button className="btn btn-success" onClick={()=>setRegId(reg._id)} data-bs-toggle="modal" data-bs-target="#updateRegistration">Edit</button>
                        <button className="btn btn-danger" onClick={()=>deleteRegistrationRecord(reg._id)}>Delete</button>
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
