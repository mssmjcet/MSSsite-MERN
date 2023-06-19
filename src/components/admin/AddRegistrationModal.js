import {useEffect,useState} from "react";

const AddRegistrationModal=(props)=>{
    
    const [name,setName]=useState("");
    const [rollNo,setRollNo]=useState("");
    const [phoneNo,setPhoneNo]=useState("");
    const [emailId,setEmailId]=useState("");
    const [paymentScreenshot,setPaymentScreenshot]=useState({preview:'',data:''});
    const [paymentStatus,setPaymentStatus]=useState('');
    const [status,setStatus]=useState('');
    const [loading,setLoading]=useState(false);
    
    const createNewRegistration = async (e) => {
        e.preventDefault()
        setLoading(true);
        let formData = new FormData();
        formData.append('Name',name);
        formData.append('RollNo',rollNo);
        formData.append('PhoneNo',phoneNo);
        formData.append('EmailId',emailId);
        formData.append('EventId',props.eventId);
        formData.append('PaymentStatus',paymentStatus);
        formData.append('PaymentScreenshot', paymentScreenshot.data)
        const response = await fetch('/api/admin/Registration', {
          method: 'POST',
          body: formData,
        })
        .then((data)=>data.json())
        .then((data)=>{
            setStatus(data.message)
            props.fetchRegistrationsForEvent(props.eventId);
        })
        setLoading(false);
      }
      
      const handleFileChange = (e) => {
        const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        
        setPaymentScreenshot(img)
      }
      const paymentStatusHandler=(e)=>{
        setPaymentStatus(e.target.value);
        if(e.target.value==='No')
        {
            const img={
                preview:'',
                data:'',
            };
            setPaymentScreenshot(img);
            console.log(paymentScreenshot);
        }
      }
   
return(<>
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
                        <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Enter participant name" aria-label="participant name" aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Email ID</span>
                        <input type="email" className="form-control" onChange={(e)=>setEmailId(e.target.value)} placeholder="xyz@example.com" aria-label="email Id" aria-describedby="basic-addon2"/>
                        </div>
                        
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Roll No.</span>
                        <input type="text" className="form-control" onChange={(e)=>setRollNo(e.target.value)} placeholder="Enter Roll No" aria-label="participant roll no." aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Phone No.</span>
                        <input type="text" className="form-control" onChange={(e)=>setPhoneNo(e.target.value)} placeholder="Enter Phone No." aria-label="phone no." aria-describedby="basic-addon1"/>
                        </div>

                        
                        <label className="form-control form-label">Payment Status</label>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio1" value="Yes" onChange={paymentStatusHandler}/>
                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="paymentStatus" id="inlineRadio2" value="No" onChange={paymentStatusHandler}/>
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
                    <button type="button" className="btn btn-primary" onClick={createNewRegistration}>Create</button>
                </div>
                </div>
            </div>
            </div>
        </>)
}

export default AddRegistrationModal;