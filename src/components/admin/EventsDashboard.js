import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

const EventsDashboard=()=>{
 
const [name,setName]=useState("");
const [description,setDescription]=useState("");
const [startDate,setStartDate]=useState("");
const [endDate,setEndDate]=useState("");
const [time,setTime]=useState("");
const [eventImage,setEventImage]=useState({preview:'',data:''});
const [duration,setDuration]=useState(0);
const [stateOfEvent,setStateOfEvent]=useState('');
const [typeOfEvent,setTypeOfEvent]=useState("");
const [paymentNumber,setPaymentNumber]=useState('');
const [loading,setLoading]=useState(false);
const [status,setStatus]=useState("");
const [eventId,setEventId]=useState(0);
const [eventData,setEventData]=useState([
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
       //setLoading(false);
    })
}


const createNewEvent = async (e) => {
    e.preventDefault()
    setLoading(true);
    let formData = new FormData();
    formData.append('Name',name);
    formData.append('Description',description);
    formData.append('StartDate',startDate);
    formData.append('EndDate',endDate);
    formData.append('Time',time);
    formData.append('Duration',duration);
    formData.append('StateOfEvent',stateOfEvent);
    formData.append('TypeOfEvent',typeOfEvent);
    formData.append('PaymentNumber',paymentNumber);   
    formData.append('EventImage', eventImage.data)
    console.log(formData);
    const response = await fetch('/api/admin/Event', {
      method: 'POST',
      body: formData,
    })
    .then((data)=>data.json())
    .then((data)=>setStatus(data.message))
    setLoading(false);
  }
  
  const updateRegistrationDetails = async (e) => {
    e.preventDefault()
    setLoading(true);
    let formData = new FormData();
    formData.append('Name',name);
    formData.append('Description',description);
    formData.append('StartDate',startDate);
    formData.append('EndDate',endDate);
    formData.append('Time',time);
    formData.append('Duration',duration);
    formData.append('StateOfEvent',stateOfEvent);
    formData.append('TypeOfEvent',typeOfEvent);
    formData.append('PaymentNumber',paymentNumber);   
    formData.append('EventImage', eventImage.data);
    console.log(formData);
    const response = await fetch('/api/admin/Event', {
      method: 'PUT',
      body: formData,
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
    
    setEventImage(img);
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
//   function initializeRegistrationVariables(registrationId)
//   {
//     let regRecord=registrationData.find(reg=>reg._id===registrationId)
//     console.log(regRecord);
//     setRegId(regRecord._id);
//     setName(regRecord.nameOfParticipant);
//     setEmailId(regRecord.emailId);
//     setRollNo(regRecord.rollNumber);
//     setPhoneNo(regRecord.phoneNumber);
//     setPaymentStatus(regRecord.paymentStatus);
//     if(regRecord.paymentFile==='Nil')
//     {
//         const img={
//             preview:'',
//             data:'',
//         };
//         setPaymentScreenshot(img);
//         console.log(paymentScreenshot);
//     }
//     else
//     {
//         const img = {
//             preview: URL.createObjectURL("/images/"+regRecord.paymentFile),
//             data: reaagRecord.paymentFile,
//           }              
//           setPaymentScreenshot(img)
//     }
//     console.log("initialized successfully");
//   }

return(
    <div className="container-fluid">
                    {/* <!-- Button trigger modal --> */}
       

        {/* <!-- Modal- new registration details --> */}
        <div className="modal fade" id="newEvent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add New Registration Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form encType="multipart/form-data">
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Enter event Name" aria-label="participant name" aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Description</span>
                    <textarea className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="Enter event description" aria-label="email Id" aria-describedby="basic-addon2"/>
                    </div>
                    
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Start Date</span>
                    <input type="date" className="form-control" onChange={(e)=>setStartDate(e.target.value)} placeholder="Select Start Date" aria-label="participant roll no." aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">End Date</span>
                    <input type="date" className="form-control" onChange={(e)=>setEndDate(e.target.value)} placeholder="Select End Date" aria-label="phone no." aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Time</span>
                    <input type="time" className="form-control" onChange={(e)=>setTime(e.target.value)} placeholder="Enter Time of event" aria-label="phone no." aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Duration</span>
                    <input type="number" className="form-control" onChange={(e)=>setDuration(e.target.value)} placeholder="Enter Duration" aria-label="phone no." aria-describedby="basic-addon1"/>
                    </div>
                    
                    <select className="form-control form-select" onChange={(e)=>setStateOfEvent(e.target.value)}>
                        <option>Select a State</option>
                        <option value="active">Active</option>
                        <option value="new">New</option>
                        <option value="ended">Ended</option>
                    </select>
                    
                    <select className="form-control form-select" onChange={(e)=>setTypeOfEvent(e.target.value)}>
                        <option>Select type of Event</option>
                        <option value="workshop">Workshop</option>
                        <option value="seminar">Seminar</option>
                        <option value="webinar">Webinar</option>
                    </select>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Payment number</span>
                    <input type="text" className="form-control" onChange={(e)=>setPaymentNumber(e.target.value)} placeholder="Enter Payment Number" aria-label="participant name" aria-describedby="basic-addon1"/>
                    </div>
                    {/* <label className="form-control form-label">Payment Status</label>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio1" value="Yes" onChange={paymentStatusHandler}/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio2" value="No" onChange={paymentStatusHandler}/>
                    <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                     */}
                    <br/>
                    {/* <label for="basic-url" className="form-label">Payment Url</label>
                    <a href="#" className="link">dummy</a>*/}
                    <div class="mb-3">
                    <label for="formFile" class="form-label">Upload Event Image</label>
                    <input class="form-control" type="file" id="formFile" onChange={handleFileChange}/>
                    </div>
                    {eventImage.preview!=='' && <img className="img-fluid" src={eventImage.preview} />} 
                </form>
            </div>
            <div className="modal-footer">
            { loading && <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>}
            {status && <div class="text-center bg-info">{status}</div>}
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={createNewEvent}>Create</button>
            </div>
            </div>
        </div>
        </div>
        
        {/* <!-- Modal -registration details update--> */}
        {/* <div className="modal fade" id="updateEvent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Registration Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form encType="multipart/form-data">
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Enter participant name" aria-label="participant name" aria-describedby="basic-addon1" value={name} />
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Email ID</span>
                    <input type="email" className="form-control" onChange={(e)=>setEmailId(e.target.value)} placeholder="xyz@example.com" aria-label="email Id" aria-describedby="basic-addon2" value={emailId} />
                    </div>
                    
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Roll No.</span>
                    <input type="text" className="form-control" onChange={(e)=>setRollNo(e.target.value)} placeholder="Enter Roll No" aria-label="participant roll no." aria-describedby="basic-addon1" value={rollNo} />
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Phone No.</span>
                    <input type="text" className="form-control" onChange={(e)=>setPhoneNo(e.target.value)} placeholder="Enter Phone No." aria-label="phone no." aria-describedby="basic-addon1" value={phoneNo} />
                    </div>

                    
                    <label className="form-control form-label">Payment Status</label>
                    <div class="form-check form-check-inline">
                    {paymentStatus==="Yes" && <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio1" value="Yes" onChange={paymentStatusHandler} checked/>}
                    {paymentStatus==="No" && <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio1" value="Yes" onChange={paymentStatusHandler}/>}
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                    {paymentStatus==="No" && <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio2" value="No" onChange={paymentStatusHandler} checked/>}
                    {paymentStatus==="Yes" && <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio2" value="No" onChange={paymentStatusHandler}/>}
                    <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                    
                    <br/>
                    <label for="basic-url" className="form-label">Payment Url</label>
                    <a href="#" className="link">dummy</a>
                    {paymentStatus==='Yes' &&
                        <div class="mb-3">
                        <label for="formFile" class="form-label">Upload Payment Screenshot</label>
                        <input class="form-control" type="file" id="formFile" onChange={handleFileChange}/>
                        </div>
                    }
                    {paymentScreenshot.preview!=='' && <img className="img-fluid" src={paymentScreenshot.preview} />}
                </form>
            </div>
            <div className="modal-footer">
            { loading && <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>}
            {status && <div class="text-center bg-info">{status}</div>}
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={updateRegistrationDetails}>Update</button>
            </div>
            </div>
        </div>
        </div> */}

        <AdminNavbar/>
        <div className="row">
            <div className="col-6">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#newEvent">
                    Add new Event
                </button>
                {/* <button type="button" className="btn btn-success" onClick={deleteRegistrationsForEvent}>
                    Delete All Events
                </button> */}
            </div>
        </div>
        {/* <div className="row">
            <div className=" my-5 col-6 text-center mx-auto">
                <form>
                <select className="form-control form-select" onChange={fetchRegistrationsForEvent}>
                    <option>Search a event</option>
                    {eventData.map((event)=>{
                        return <option value={event.id}>{event.name}</option>
                    })}

                </select>
                </form>
            </div>
        </div> */}
        <div className="h2 text-center ">Events</div>
        <div className="row mx-2 border-2 border-rounded border-primary">
        
        {eventData && eventData.map((evt)=>{
            return(
                <div className="col-sm-6">
                <div class="card mb-3">
                <img src={"/"+evt.EventImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{evt.Name}</h5>
                    <p class="card-text">{evt.Description}</p>
                    <p class="card-text">Start Date:{evt.StartDate}</p>
                    <p class="card-text">End Date:{evt.EndDate}</p>
                    <p class="card-text">Time:{evt.Time}</p>
                    <p class="card-text">Duration:{evt.Duration}</p>
                    <p class="card-text">State Of Event:{evt.StateOfEvent}</p>
                    <p class="card-text">Type Of Event:{evt.TypeOfEvent}</p>
                    <p class="card-text">Payment Number:{evt.PaymentNumber}</p>
                    {/* <button className="btn btn-success" onClick={()=>initializeRegistrationVariables(event._id)} data-bs-toggle="modal" data-bs-target="#updateEvent">Edit</button> */}
                    <button className="btn btn-danger" onClick={()=>deleteEvent(evt._id)}>Delete</button>
                </div>
                </div>
                </div>
            );
        })}
    </div>
</div>
);
}
export default EventsDashboard;