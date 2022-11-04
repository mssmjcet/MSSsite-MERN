import { useState } from "react";

const Tempregister=()=>{
    const [name,setName]=useState("");
    const [rollNo,setRollNo]=useState("");
    const [phoneNo,setPhoneNo]=useState("");
    const [emailId,setEmailId]=useState("");
    const [eventId,setEventId]=useState(-1);
    const [paymentScreenshot,setPaymentScreenshot]=useState({preview:'',data:''});
    const [status,setStatus]=useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('Name',name);
        formData.append('RollNo',rollNo);
        formData.append('PhoneNo',phoneNo);
        formData.append('EmailId',emailId);
        formData.append('EventId',eventId);
        formData.append('PaymentScreenshot', paymentScreenshot.data)
        const response = await fetch('/api/users/registerEvent', {
          method: 'POST',
          body: formData,
        })
        if (response) setStatus(response.statusText)
      }
      const handleFileChange = (e) => {
        const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        setPaymentScreenshot(img)
      }
  return(  <>
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
    <div className="form-group">
    <label for="name">Name</label>
    <input type="text" className="form-control" name="Name" id="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
  </div>
  <div className="form-group">
    <label for="rollNo">Rollno</label>
    <input type="text" className="form-control" id="rollNo" name="RollNo" onChange={(e)=>setRollNo(e.target.value)} placeholder="Enter your rollno"/>
  </div>
  <div className="form-group">
    <label for="phoneNo">Phone No.</label>
    <input type="text" className="form-control" id="phoneNo" name="PhoneNo" onChange={(e)=>setPhoneNo(e.target.value)} placeholder="Enter your phone no."/>
  </div>
  <div className="form-group">
    <label for="emailId">Email address</label>
    <input type="email" className="form-control" id="emailId" name="EmailId" onChange={(e)=>setEmailId(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <select className="custom-select" name="EventId" onChange={(e)=>setEventId(e.target.value)}>
  <option selected >Select Event</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

   <br></br>


<label for="customFile">Upload payment screenshot</label>
{paymentScreenshot.preview && <img src={paymentScreenshot.preview} width='100' height='100' />}
<div className="custom-file">
  <input type="file" className="custom-file-input" id="customFile" name="PaymentScreenshot" onChange={handleFileChange}/>
  <label className="custom-file-label" for="customFile">Choose file</label>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
{status && <h4>{status}</h4>}
</>);
}
export default Tempregister;
