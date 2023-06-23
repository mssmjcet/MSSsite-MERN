import { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import "./../../assets/css/events.css" 
import UserNavbar2 from "./UserNavbar2";
import Footer2 from "./Footer2";
import { PointerEventsCheckLevel } from "@testing-library/user-event";

const Events=()=>{
  // const [eventsData,setEventsData]=useState([{}]);
    // useEffect(()=>{
    //     getFiles();
    //       },[])


          // const getFiles=()=>{
          //   fetch('./jsonFiles/events.json',{
          //     headers : { 
          //       'Content-Type': 'application/json',
          //       'Accept': 'application/json'
          //      }
          //   }).then((res)=>res.json())
          //   .then((res)=>{
          //     console.log(res);
          //  //   setImgUrl(res.imgUrl);
          //  setEventsData(res);
          //   });
          //   console.log("done");
          // }
  const [eventsData,setEventsData]=useState([]);
  useEffect(()=>{
    fetchEventsData();
},[]);

const fetchEventsData=()=>{
    fetch('/api/admin/Event').then((res)=>res.json())
    .then((data)=>{
        if(data.eventsData)
        setEventsData(data.eventsData);
        console.log(data);
        console.log(data.eventsData);
    })
    console.log("fetched");
}


    return(
        <div className="events container-fluid">
            <UserNavbar2/>
            <br/>
            <br/>
            <div className="events work-shops-heading-div1">
      {/* <h2 className="events work-shops-heading">Work Shops</h2> */}
      <div className="wave">
            <div className="content">
              <h5>Work<span> Shops</span> </h5>
              <h5 className="projectheading">Work<span> Shops</span></h5>
            </div>
          </div>
    </div>
    <br />
    <div className="events container">
      <div className="events row">
        { eventsData.map((evt)=>{
        if(evt.TypeOfEvent==='workshop')
        return(
        <div className="events col-lg-6 col-md-6 col-sm-12">
          <img src={"/images/uploaded/" + evt?.EventImage} className="events card-img-top" alt="..." />
          <div className="events card">
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
              {evt.StateOfEvent!=='ended' &&  <a href="/register" className="events btn btn-primary know-more-button">Register</a>}
            </div>
          </div>
        </div>
        );
        })
        }
        <br />
      </div>
    </div>
    <div className="events seminars-heading-div1">
      {/* <h2 className="events seminars-heading">Seminars</h2> */}
      <div className="wave">
            <div className="content">
              <h5>Seminars</h5>
              <h5 className="projectheading">Seminars</h5>
            </div>
          </div>
    </div>
    <br />
    <div className="events container">
      <div className="events row">
        { eventsData.map((evt)=>{
          if(evt.TypeOfEvent==='seminar')
          return(    
            <div className="events col-lg-6 col-md-6 col-sm-12">
          <img src={"/images/uploaded/" + evt?.EventImage} className="events card-img-top" alt="..." />
          <div className="events card">
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
              {evt.StateOfEvent!=='ended' && <a href="/register" className="events btn btn-primary know-more-button">Register</a>}
            </div>
          </div>
        </div>
      );
    })  
      }
        <br /> 
      </div>
    </div>
    <div className="events Webinars-heading-div1">
      {/* <h2 className="events Webinars-heading">Webinars</h2> */}
      <div className="wave">
            <div className="content">
              <h5>Webinars</h5>
              <h5 className="projectheading">Webinars</h5>
            </div>
          </div>
    </div>
    <div className="events container">
        <div className="events row">
         { eventsData.map((evt)=>{
          if(evt.TypeOfEvent==='webinar')
          return(  
            <div className="events col-lg-6 col-md-6 col-sm-12">
          <img src={"/images/uploaded/" + evt?.EventImage} className="events card-img-top" alt="..." />
          <div className="events card">
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
              {evt.StateOfEvent!=='ended' && <a href="/register" className="events btn btn-primary know-more-button">Register</a>}
            </div>
          </div>
        </div>
        );
      })  
        }
          <br />
        </div>
      </div>
      <div className="events Others-heading-div1">
        {/* <h2 className="events Others-heading">Other Events</h2> */}
        <div className="wave">
            <div className="content">
              <h5>Other Events</h5>
              <h5 className="projectheading">Other Events</h5>
            </div>
          </div>
      </div>
      <div className="events container">
        <div className="events row">
          { eventsData.map((evt)=>{
            if(evt.TypeOfEvent==='other')
            return(  
              <div className="events col-lg-6 col-md-6 col-sm-12">
          <img src={"/images/uploaded/" + evt?.EventImage} className="events card-img-top" alt="..." />
          <div className="events card">
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
              {evt.StateOfEvent!=='ended' && <a href="/register" className="events btn btn-primary know-more-button">Register</a>}
            </div>
          </div>
        </div>
          );
        })
          }
          <br />
        </div>
      </div>
      <Footer2/>
        </div>
    );
}
export default Events;