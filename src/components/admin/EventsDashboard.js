import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddEventModal from "./AddEventModal";
import EditEventModal from "./EditEventModal";

const EventsDashboard=()=>{
 
const [searchInput,setSearchInput]=useState("");
const [eventId,setEventId]=useState(-1);
const [eventData,setEventData]=useState([]);


useEffect(()=>{
    fetchEventsData();
},[]);

const fetchEventsData=()=>{
    fetch('/api/admin/Event').then((res)=>res.json())
    .then((data)=>{
        if(data.eventsData)
        setEventData(data.eventsData);
        console.log(data);
        console.log(data.eventsData);
    })
    console.log("fetched");
}

const deleteEvent=(EventId)=>{
    //fetch registrations
    fetch('/api/admin/Event/'+EventId,{
    method: "DELETE",
    })
    .then((res) => res.json())
    .then((data)=> {
        alert(data.message);
        console.log(data);
        fetchEventsData();
       //setLoading(false);
    })
}


  
  
//   const paymentStatusHandler=(e)=>{
//     setPaymentStatus(e.target.value);
//     if(e.target.value==='No')
//     {
//         const img={
//             preview:'',
//             data:'',
//         };
//         setPaymentScreenshot(img);
//         console.log(paymentScreenshot);
//     }
//   }
  
   
  

return(
    <>
    <AdminNavbar/>
    <div className="container-fluid">
        {/* <!-- Modal- new event details --> */}
        <AddEventModal fetchEventsData={fetchEventsData}/>
        
        {/* <!-- Modal event details update--> */}
        <EditEventModal fetchEventsData={fetchEventsData} eventId={eventId} eventData={eventData}/>

        <div className="h2 text-center ">Events</div>
        <div className="row justify-content-end">
            <div className="col-3">

            </div>
            <div className="col-6">
                <form>
                    <input type="text" className="form-control m-1" name="searchInput" placeholder="Enter an event name" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput}  />
                </form>
                <i class="bi bi-search"></i>
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#newEvent">
                    Add new Event
                </button>
                {/* <button type="button" className="btn btn-danger m-1" >
                    onClick={deleteRegistrationsForEvent}>
                    Delete All Events
                </button> */}
            </div>
        </div>
        {/* <div className="row">
            <div className=" my-5 col-6 text-center mx-auto">
                
            </div>
        </div> */}
        
        <div className="row mx-2 border-2 border-rounded border-primary">
        {eventData?.length===0 &&
            <div className="text-center h-100">
                
                    No events present. Please add an event :)
                
            </div>
        }
        {eventData?.map((evt)=>{
            if(searchInput==="" || evt.Name.includes(searchInput))
            return(
                <div className="col-sm-4">
                <div className="card mb-3">
                <img src={"/images/uploaded/"+evt.EventImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{evt.Name}</h5>
                    <p className="card-text">{evt.Description}</p>
                    <div className="row">
                        <div className="col-6">
                            <p className="card-text"><span className="fw-bold">Start Date:</span> {evt.StartDate}</p>
                            <p className="card-text"><span className="fw-bold">Time:</span> {evt.Time}</p>
                            <p className="card-text"><span className="fw-bold">State Of Event:</span> {evt.StateOfEvent}</p>
                           
                        </div>
                        <div className="col-6">
                            <p className="card-text"><span className="fw-bold">End Date:</span> {evt.EndDate}</p>
                            <p className="card-text"><span className="fw-bold">Duration:</span> {evt.Duration}</p>
                            <p className="card-text"><span className="fw-bold">Type Of Event:</span> {evt.TypeOfEvent}</p>
                        </div>
                    </div>
                    <br/>
                    <p className="card-text"><span className="fw-bold">Payment Number:</span> {evt.PaymentNumber}</p>
                    <button className="btn btn-success m-1" onClick={()=>setEventId(evt._id)} data-bs-toggle="modal" data-bs-target="#updateEvent">Edit</button>
                    <button className="btn btn-danger m-1" onClick={()=>deleteEvent(evt._id)}>Delete</button>
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
export default EventsDashboard;