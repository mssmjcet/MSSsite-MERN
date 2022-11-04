import Navbar from "./Navbar";
import {useState} from "react";

const RegistrationDashBoard=()=>{
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
    const [registrationData,setRegistrationData]=useState([
        {
            name:'shah',
            rollNo:'38229',
            emailId:'asdasd@asjkd',
            phoneNo:'24324324234',
            paymentStatus:'yes',
            paymentScreenshot:'sadasd.jpg',

        }
    ]);

    const fetchRegistrationsForEvent=(e)=>{
        setEventId(e.target.value);
        fetch('/api/users/getAllEvents/'+e.target.value).then((res)=>res.json())
    .then((data)=>setEventData(data))
    
    //fetch tests
    fetch('/api/admin/getRegistrationInfo',{
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        'eventId':eventId,
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then((res) => res.json())
  .then((data)=> {
     setRegistrationData(data);
     console.log(data);
    // console.log(tests);
  //  setLoading(false);
  })
  
    }
    return(
        <div className="container-fluid">
            <Navbar/>
            <div className="row">
                <div className=" my-5 col-6 text-center mx-auto">
                    <form>
                    <select className="form-control form-select" onChange={fetchRegistrationsForEvent}>
                        <option>Select a event</option>
                        {eventData.map((event)=>{
                            return <option value={event.id}>{event.name}</option>
                        })}
                        
                    </select>
                    </form>
                </div>
            </div>
            <div className="h2 text-center ">Event details</div>
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
    </tr>
  </thead>
  <tbody>
    {registrationData.map((registration)=>{
        return(
            <tr>
      <th scope="row">1</th>
      <td>{registration.name}</td>
      <td>{registration.rollNo}</td>
      <td>{registration.emailId}</td>
      <td>{registration.phoneNo}</td>
      <td>{registration.paymentStatus}</td>
      <td><img src={registration.paymentScreenshot}/></td>
    </tr>
        );
    })
    
    }
  </tbody>
</table>
</div>
</div>
    );
}

export default RegistrationDashBoard;