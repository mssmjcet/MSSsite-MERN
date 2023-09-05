import { useEffect, useState } from "react";

const EditEventModal=(props)=>{

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
    
    useEffect(()=>{
        if(props.eventId!=-1)
        {
            initializeEventDetails(props.eventId);
        }
        console.log(props.eventId)
    },[props.eventId])    ;

    const updateEventDetails = async (e) => {
        e.preventDefault();
        setLoading(true);
        let formData1 = new FormData();
        formData1.append('eventId',eventId);
        formData1.append('Name',name);
        // console.log(formData1);
        formData1.append('Description',description);
        formData1.append('StartDate',startDate);
        formData1.append('EndDate',endDate);
        formData1.append('Time',time);
        formData1.append('Duration',duration);
        formData1.append('StateOfEvent',stateOfEvent);
        formData1.append('TypeOfEvent',typeOfEvent);
        formData1.append('PaymentNumber',paymentNumber);   
        formData1.append('EventImage', eventImage.data);
        console.log(formData1);
        console.log(name);
        for (var key of formData1.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        const response = await fetch(process.env.REACT_APP_BACKEND_API_URL+'/admin/Event', {
          method: 'PUT',
          body: formData1,
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


    const initializeEventDetails=(evtId)=>{
      let evtRecord=props.eventData.find(evt=>evt._id===evtId);
        console.log(evtRecord);
        setEventId(evtRecord._id);
        setDescription(evtRecord.Description);
        setStartDate(evtRecord.StartDate);
        setEndDate(evtRecord.EndDate);
        setDuration(evtRecord.Duration);
        setName(evtRecord.Name);
        setPaymentNumber(evtRecord.PaymentNumber);
        setStateOfEvent(evtRecord.StateOfEvent);
        setTypeOfEvent(evtRecord.TypeOfEvent);
        setStatus(evtRecord.Status);
        setTime(evtRecord.Time);
        if(evtRecord.EventImage==='Nil')
        {
            const img={
                preview:'',
                data:'',
            };
            setEventImage(img);
            console.log(eventImage);
        }
        else
        {
            let eurl=process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH+evtRecord.EventImage;
            console.log(eurl);
            const img = {
                preview: eurl,
                data: evtRecord.EventImage,
            }              
            setEventImage(img);
            console.log(eventImage);
        }
        console.log("initialized successfully");
    
}
    return(<>
     <div className="modal fade" id="updateEvent" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Event Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form encType="multipart/form-data">
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter event Name" aria-label="participant name" aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Description</span>
                    <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter event description" aria-label="email Id" aria-describedby="basic-addon2"/>
                    </div>
                    
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Start Date</span>
                    <input type="date" className="form-control" value={startDate} onChange={(e)=>setStartDate(e.target.value)} placeholder="Select Start Date" aria-label="participant roll no." aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">End Date</span>
                    <input type="date" className="form-control" value={endDate} onChange={(e)=>setEndDate(e.target.value)} placeholder="Select End Date" aria-label="phone no." aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Time</span>
                    <input type="time" className="form-control" value={time} onChange={(e)=>setTime(e.target.value)} placeholder="Enter Time of event" aria-label="phone no." aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Duration(hrs)</span>
                    <input type="number" className="form-control" value={duration} onChange={(e)=>setDuration(e.target.value)} placeholder="Enter Duration" aria-label="phone no." aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">State</span>
                        <select className="form-control form-select" value={stateOfEvent} onChange={(e)=>setStateOfEvent(e.target.value)}>
                            <option>Select a State</option>
                            <option value="new">Upcoming(New)</option>
                            <option value="active">Live(Active)</option>
                            <option value="ended">Completed(Ended)</option>
                        </select>
                    </div>
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Type</span>
                        <select className="form-control form-select" value={typeOfEvent} onChange={(e)=>setTypeOfEvent(e.target.value)}>
                            <option>Select type of Event</option>
                            <option value="workshop">Workshop</option>
                            <option value="seminar">Seminar</option>
                            <option value="webinar">Webinar</option>
                        </select>
                    </div>
                    

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Payment number</span>
                    <input type="text" className="form-control" value={paymentNumber} onChange={(e)=>setPaymentNumber(e.target.value)} placeholder="Enter Payment Number" aria-label="participant name" aria-describedby="basic-addon1"/>
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
                    {eventImage.preview!=='' && <img alt="image not loaded" className="img-fluid" src={eventImage.preview} />} 
                </form>
            </div>
            <div className="modal-footer">
            { loading && <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
            {status && <div className="text-center bg-info">{status}</div>}
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={updateEventDetails}>Update</button>
            </div>
            </div>
        </div>
        </div>

       
    </>)
}

export default EditEventModal;