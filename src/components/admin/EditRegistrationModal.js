import { useEffect,useState } from "react";

const EditRegistrationModal=(props)=>{

    const [name,setName]=useState("");
    const [rollNo,setRollNo]=useState("");
    const [phoneNo,setPhoneNo]=useState("");
    const [emailId,setEmailId]=useState("");
    const [paymentScreenshot,setPaymentScreenshot]=useState({preview:'',data:''});
    const [paymentStatus,setPaymentStatus]=useState('');
    const [status,setStatus]=useState('');
    const [loading,setLoading]=useState(false);
    const [regId,setRegId]=useState(-1);

    useEffect(()=>{
            if(props.regId!=-1)
            {
                initializeRegistrationVariables(props.regId);
            }
    },[props.regId])    
    
    
    
      
      const updateRegistrationDetails = async (e) => {
        e.preventDefault()
        setLoading(true);
        let formData = new FormData();
        formData.append('registrationId',regId)
        formData.append('Name',name);
        formData.append('RollNo',rollNo);
        formData.append('PhoneNo',phoneNo);
        formData.append('EmailId',emailId);
        formData.append('EventId',props.eventId);
        formData.append('PaymentStatus',paymentStatus);
        formData.append('PaymentScreenshot', paymentScreenshot.data)
        const response = await fetch(process.env.REACT_APP_BACKEND_API_URL+'/admin/Registration', {
          method: 'PUT',
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

      function initializeRegistrationVariables(registrationId)
      {
        let regRecord=props?.registrationData?.find(reg=>reg._id===registrationId)
        console.log(regRecord);
        setRegId(regRecord._id);
        setName(regRecord.nameOfParticipant);
        setEmailId(regRecord.emailId);
        setRollNo(regRecord.rollNumber);
        setPhoneNo(regRecord.phoneNumber);
        setPaymentStatus(regRecord.paymentStatus);
        if(regRecord.paymentFile==='Nil')
        {
            const img={
                preview:'',
                data:'',
            };
            setPaymentScreenshot(img);
            console.log(paymentScreenshot);
        }
        else
        {
            const img = {
                preview: process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH+regRecord.paymentFile,
                data: regRecord.paymentFile,
              }              
              setPaymentScreenshot(img)
        }
        console.log("initialized successfully");
      }

    return(<>
    <div className="modal fade" id="updateRegistration" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Registration Details</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <span className="fw-bold fst-italic">Event Name:</span> {props.eventName}
                    </div>
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
                        <div className="form-check form-check-inline">
                        {paymentStatus==="Yes" && <input className="form-check-input" type="radio" name="paymentStatus" id="inlineRadio1" value="Yes" onChange={paymentStatusHandler} checked/>}
                        {paymentStatus==="No" && <input className="form-check-input" type="radio" name="paymentStatus" id="inlineRadio1" value="Yes" onChange={paymentStatusHandler}/>}
                        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                        {paymentStatus==="No" && <input className="form-check-input" type="radio" name="paymentStatus" id="inlineRadio2" value="No" onChange={paymentStatusHandler} checked/>}
                        {paymentStatus==="Yes" && <input className="form-check-input" type="radio" name="paymentStatus" id="inlineRadio2" value="No" onChange={paymentStatusHandler}/>}
                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                        </div>
                        
                        <br/>
                        <label htmlFor="basic-url" className="form-label">Payment Url: </label>
                        <a href="#" className="nav-item text-decoration-none"> dummy</a>
                        {paymentStatus==='Yes' &&
                            <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Upload Payment Screenshot</label>
                            <input className="form-control" type="file" id="formFile" onChange={handleFileChange}/>
                            </div>
                        }
                        {paymentScreenshot.preview!=='' && <img className="img-fluid" src={paymentScreenshot.preview} />}
                    </form>
                </div>
                <div className="modal-footer">
                { loading && <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
                {status && <div className="text-center bg-info">{status}</div>}
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={updateRegistrationDetails}>Update</button>
                </div>
                </div>
            </div>
            </div>

    </>)
}

export default EditRegistrationModal;