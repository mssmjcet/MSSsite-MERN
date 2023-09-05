import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const EventCard=({evt})=>{
  const [baseImageURL,setBaseImageURL]=useState(" ");

  useEffect(()=>{
    if(process.env.REACT_APP_ENABLE_LOCAL_DATA_FILES==='true')
      setBaseImageURL("./images/uploads/");
    else
      setBaseImageURL(process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH);
  },[])
  
    return(<>
    <div className="events col-lg-4 col-md-6 col-sm-12">
          
          <div className="events card h-100">
          <img src={baseImageURL + evt?.EventImage} className="events card-img-top img-fluid" alt="..." />
            <div className="events card-body ">
              <h5 className="events card-title">{evt.Name}</h5>
              
              <div>
                <div className="events row ">
                  <div class="col-6 text-start">
                    <p className="events card-text">Date: {evt.StartDate} to {evt.EndDate} </p>
                  </div>
                  <div className="events col-6 text-end">
                    <p className="events card-text">Time: {evt.Time} </p>
                  </div>
                </div>
                <div className="events row">
                  <div className="events col-6 text-start">
                  Duration: {evt.Duration} hrs
                  </div>
                  <div className="events col-6 text-end">
                  Status: {evt.StateOfEvent==='new'&& <button className="btn btn-sm btn-primary">upcoming</button>}
                  {evt.StateOfEvent==='active' && <button className="btn btn-sm btn-success">Live</button>}
                  {evt.StateOfEvent==='ended'
                   && <button className="btn btn-sm btn-danger">completed</button>}
                  </div>
                </div>
                <div className="events row ">
                  <div className="events col ">
                  Payment Number: {evt.PaymentNumber}
                  </div>
                </div>
                <br/>
              <p className="events card-text">
                {evt.Description}
              </p>
              </div>
              {evt.StateOfEvent!=='ended' &&  <Link to="/register" className="events btn btn-primary know-more-button">Register</Link>}
            </div>
          </div>
        </div>
    </>)
}

export default EventCard;