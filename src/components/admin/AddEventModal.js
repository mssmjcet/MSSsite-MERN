import { useState } from "react";
const AddEventModal=(props)=>{

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
        .then((data)=>{
            setStatus(data.message)
            props.fetchEventsData();
        })
        setLoading(false);
      }
      
      const handleFileChange = (e) => {
        const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        
        setEventImage(img);
      }

    return(<>
    <div className="modal fade" id="newEvent" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add New Event Details</h1>
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
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">State</span>
                        <select className="form-control form-select" onChange={(e)=>setStateOfEvent(e.target.value)}>
                            <option>Select a State</option>
                            <option value="new">New</option>
                            <option value="active">Active</option>
                            <option value="ended">Ended</option>
                        </select>
                    </div>

                    
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Type</span>
                        <select className="form-control form-select" onChange={(e)=>setTypeOfEvent(e.target.value)}>
                            <option>Select type of Event</option>
                            <option value="workshop">Workshop</option>
                            <option value="seminar">Seminar</option>
                            <option value="webinar">Webinar</option>
                        </select>
                    </div>

                    

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Payment number</span>
                    <input type="text" className="form-control" onChange={(e)=>setPaymentNumber(e.target.value)} placeholder="Enter Payment Number" aria-label="participant name" aria-describedby="basic-addon1"/>
                    </div>
                    {/* <label className="form-control form-label">Payment Status</label>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="paymentStatus" id="inlineRadio1" value="Yes" onChange={paymentStatusHandler}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="paymentStatus" id="inlineRadio2" value="No" onChange={paymentStatusHandler}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                    </div>
                     */}
                    <br/>
                    {/* <label htmlFor="basic-url" className="form-label">Payment Url</label>
                    <a href="#" className="link">dummy</a>*/}
                    <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload Event Image</label>
                    <input className="form-control" type="file" id="formFile" onChange={handleFileChange}/>
                    </div>
                    {eventImage.preview!=='' && <img className="img-fluid" src={eventImage.preview} />} 
                </form>
            </div>
            <div className="modal-footer">
            { loading && <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
            {status && <div className="text-center bg-info">{status}</div>}
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={createNewEvent}>Create</button>
            </div>
            </div>
        </div>
        </div>
    </>)
}

export default AddEventModal;