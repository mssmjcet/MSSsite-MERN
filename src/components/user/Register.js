import "./../../assets/style.css";
import { useEffect, useState } from "react";
import Footer2 from "./Footer2";
import UserNavbar3 from "./UserNavbar3";

const Register = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [eventId, setEventId] = useState(1);
  const [paymentScreenshot, setPaymentScreenshot] = useState({
    preview: "",
    data: "",
  });
  const [paymentStatus, setPaymentStatus] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let formData = new FormData();
    formData.append("Name", name);
    formData.append("RollNo", rollNo);
    formData.append("PhoneNo", phoneNo);
    formData.append("EmailId", emailId);
    formData.append("EventId", eventId);
    formData.append("PaymentStatus", paymentStatus);
    formData.append("PaymentScreenshot", paymentScreenshot.data);
    const response = await fetch(process.env.REACT_APP_BACKEND_API_URL+"/users/Registration", {
      method: "POST",
      body: formData,
    })
      .then((data) => data.json())
      .then((data) => setStatus(data.message));
    setLoading(false);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };

    setPaymentScreenshot(img);
  };
  const paymentStatusHandler = (e) => {
    setPaymentStatus(e.target.value);
    if (e.target.value === "No") {
      const img = {
        preview: "",
        data: "",
      };
      setPaymentScreenshot(img);
      console.log(paymentScreenshot);
    }
  };


  const [eventsData,setEventsData]=useState([]);
  useEffect(()=>{
    fetchEventsData();
},[]);

const fetchEventsData=()=>{
    fetch(process.env.REACT_APP_BACKEND_API_URL+'/users/Event').then((res)=>res.json())
    .then((data)=>{
        if(data.eventsData)
        setEventsData(data.eventsData);
        console.log(data);
        console.log(data.eventsData);
    })
    console.log("fetched");
}

  return (
    <div id="registerForm">
      <UserNavbar3/>
      {/* <div className="form-icon">
        <span><i className="icon icon-user"></i></span>
    </div> */}

      <div className="registration-form">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="text-center h2 register-heading">Registration Form</div>
          <div className="text-center register-subheading">
            Select a Event to Register and Fill the details.
          </div>
          <br />

          <select
            className="form-control item form-select"
            placeholder="select event"
            name="EventId"
            onChange={(e) => setEventId(e.target.value)}
          >
            <option>Select a Event</option>
            {
              eventsData.map((evt) =>(
                evt.StateOfEvent !== "ended" && <option value={evt._id}>{evt.Name}</option> 
              ))
            }
          </select>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="username"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="rollno"
              name="RollNo"
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="Roll Number"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="email"
              name="EmailId"
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="phone-number"
              name="PhoneNo"
              onChange={(e) => setPhoneNo(e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          <span>Payment Completed</span>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="PaymentStatus"
              id="inlineRadio1"
              value="Yes"
              onChange={paymentStatusHandler}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="PaymentStatus"
              id="inlineRadio2"
              value="No"
              onChange={paymentStatusHandler}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              No
            </label>
          </div>
          <br />
          <br />
          {paymentStatus === "Yes" && (
            <>
              <label htmlFor="customFile">Upload payment screenshot</label>
              <br />
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  name="PaymentScreenshot"
                  onChange={handleFileChange}
                />
              </div>
            </>
          )}
          <br />
          {paymentScreenshot.preview !== "" && (
            <img className="img-fluid" src={paymentScreenshot.preview} />
          )}

          <div className="form-group">
            <button type="submit" className="btn btn-block register register-btn">
              Register Now!
            </button>
          </div>
          {loading && (
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          )}
          {status && <div class="text-center bg-info">{status}</div>}
        </form>
      </div>
      <Footer2/>
    </div>
  );
};
export default Register;
