import AdminNavbar from "./AdminNavbar";
import {useState} from "react";

const RegistrationDashboard=()=>{
   
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
            name:'dummy',
            rollNo:'1111111',
            emailId:'dummy@dummy.com',
            phoneNo:'111111111',
            paymentStatus:'yes',
            paymentScreenshot:'dummy.jpg',
        }
    ]);


    const fetchEventsData=()=>{
        //fetch('/api/admin/Event').then((res)=>res.json())
       // .then((data)=>setEventData(data.eventData))
    }
    const fetchRegistrationsForEvent=(e)=>{
        const newEventId=e.target.value;
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
            prompt(data.message);
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
            prompt(data.message);
            console.log(data);
           //setLoading(false);
        })
    }
    const [name,setName]=useState("");
    const [rollNo,setRollNo]=useState("");
    const [phoneNo,setPhoneNo]=useState("");
    const [emailId,setEmailId]=useState("");
    //const [eventId,setEventId]=useState(1);
    const [paymentScreenshot,setPaymentScreenshot]=useState({preview:'',data:''});
    const [paymentStatus,setPaymentStatus]=useState('');
    const [status,setStatus]=useState('');
    const [loading,setLoading]=useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        let formData = new FormData();
        formData.append('Name',name);
        formData.append('RollNo',rollNo);
        formData.append('PhoneNo',phoneNo);
        formData.append('EmailId',emailId);
        formData.append('EventId',eventId);
        formData.append('PaymentStatus',paymentStatus);
        formData.append('PaymentScreenshot', paymentScreenshot.data)
        const response = await fetch('/api/admin/Registration', {
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
        formData.append('RollNo',rollNo);
        formData.append('PhoneNo',phoneNo);
        formData.append('EmailId',emailId);
        formData.append('EventId',eventId);
        formData.append('PaymentStatus',paymentStatus);
        formData.append('PaymentScreenshot', paymentScreenshot.data)
        const response = await fetch('/api/admin/Registration', {
          method: 'POST',
          body: formData,
        })
        .then((data)=>data.json())
        .then((data)=>setStatus(data.message))
        setLoading(false);
      }

    //   const handleFileChange = (e) => {
    //     const img = {
    //       preview: URL.createObjectURL(e.target.files[0]),
    //       data: e.target.files[0],
    //     }
        
    //     setPaymentScreenshot(img)
    //   }
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
        <div className="container-fluid">
                        {/* <!-- Button trigger modal --> */}
           

            {/* <!-- Modal --> */}
            <div className="modal fade" id="newRegistration" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                        <input type="text" className="form-control" placeholder="Enter participant name" aria-label="participant name" aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Email ID</span>
                        <input type="email" className="form-control" placeholder="xyz@example.com" aria-label="email Id" aria-describedby="basic-addon2"/>
                        </div>
                        
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Roll No.</span>
                        <input type="text" className="form-control" placeholder="Enter Roll No" aria-label="participant roll no." aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Phone No.</span>
                        <input type="text" className="form-control" placeholder="Enter Phone No." aria-label="phone no." aria-describedby="basic-addon1"/>
                        </div>

                        
                        <label className="form-control">Payment Status</label>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio1" value="Yes"/>
                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio2" value="No"/>
                        <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                        

                        <label for="basic-url" className="form-label">Payment Url</label>

                        <div class="mb-3">
                        <label for="formFile" class="form-label">Upload Payment Screenshot</label>
                        <input class="form-control" type="file" id="formFile"/>
                        </div>

                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Create</button>
                </div>
                </div>
            </div>
            </div>
            
            <AdminNavbar/>
            <div className="row">
                <div className="col-4">
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#newRegistration">
                        Add
                    </button>
                </div>
            </div>
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
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {registrationData.map((registration)=>{
                        return(
                            <tr>
                    <th scope="row">1</th>
                    <td>{registration.nameOfParticipant}</td>
                    <td>{registration.rollNumber}</td>
                    <td>{registration.emailId}</td>
                    <td>{registration.phoneNumber}</td>
                    <td>{registration.paymentStatus}</td>
                    <td><img src={"/images/"+registration.paymentFile}/></td>
                    <td>
                        <button className="btn btn-success">Edit</button>
                        <button className="btn btn-danger" onClick={()=>deleteRegistrationRecord(registration._id)}>Delete</button>
                    </td>
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

export default RegistrationDashboard;
