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
        formData.append('name',name);
        formData.append('rollNo',rollNo);
        formData.append('phoneNo',phoneNo);
        formData.append('emailId',emailId);
        formData.append('eventId',eventId);
        //formData.append('file', paymentScreenshot.data)
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
    <form method="post" action="/api/users/registerEvent">
    <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
  </div>
  <div class="form-group">
    <label for="rollNo">Rollno</label>
    <input type="text" class="form-control" id="rollNo" onChange={(e)=>setRollNo(e.target.value)} placeholder="Enter your rollno"/>
  </div>
  <div class="form-group">
    <label for="phoneNo">Phone No.</label>
    <input type="text" class="form-control" id="phoneNo" onChange={(e)=>setPhoneNo(e.target.value)} placeholder="Enter your phone no."/>
  </div>
  <div class="form-group">
    <label for="emailId">Email address</label>
    <input type="email" class="form-control" id="emailId" onChange={(e)=>setEmailId(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <select class="custom-select" onChange={(e)=>setEventId(e.target.value)}>
  <option selected>Select Event</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

   <br></br>  
      
    
<label for="customFile">Upload payment screenshot</label>
{paymentScreenshot.preview && <img src={paymentScreenshot.preview} width='100' height='100' />}  
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile" onChange={handleFileChange}/>
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{status && <h4>{status}</h4>}
</>);
}
export default Tempregister;