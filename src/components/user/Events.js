import { useEffect, useState } from "react";
import "./../../assets/css/events.css" 
import Footer2 from "./Footer2";
import UserNavbar3 from "./UserNavbar3";
import EventCard from "./EventCard";

const Events=()=>{


  const [eventsData,setEventsData]=useState([]);
  

  useEffect(()=>{
    if(process.env.REACT_APP_ENABLE_LOCAL_DATA_FILES==='true')
      getFiles();
    else
      fetchEventsData();

},[]);

//fetch events data from local file events.json
const getFiles=()=>{
  fetch('./jsonFiles/events.json',{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
  }).then((res)=>res.json())
  .then((res)=>{
    console.log(res);
  //   setImgUrl(res.imgUrl);
  setEventsData(res);
  console.log("done");
  });
  
}

//fetch events data from backend
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


    return(
      <>
      <UserNavbar3/>
      
        <div className="events container-fluid">
            
            <br/>
            <br/>
            <div className="events work-shops-heading-div1">
      <div className="wave">
            <div className="content">
              <h5>WORKSHOPS</h5>
              <h5 className="projectheading">WORKSHOPS</h5>
            </div>
      </div>
    </div>
    <br />
    <div className="events container">
      <div className="events row">
        {
          eventsData.filter((evt)=>evt.TypeOfEvent==='workshop').length==0 && <p className="text-center">No Workshops to display. :)</p>
        }
        { eventsData.map((evt)=>{
        if(evt.TypeOfEvent==='workshop')
        return(<EventCard evt={evt}/>);
        })
        }
        <br />
      </div>
    </div>
    <div className="events seminars-heading-div1">
      <div className="wave">
            <div className="content">
              <h5>SEMINARS</h5>
              <h5 className="projectheading">SEMINARS</h5>
            </div>
          </div>
    </div>
    <br />
    <div className="events container">
      <div className="events row">
        {
          eventsData.filter((evt)=>evt.TypeOfEvent==='seminar').length==0 && <p className="text-center">No Seminars to display. :)</p>
        }
        { eventsData.map((evt)=>{
          if(evt.TypeOfEvent==='seminar')
          return(<EventCard evt={evt}/>);
    })  
      }
        <br /> 
      </div>
    </div>
    <div className="events Webinars-heading-div1">
      <div className="wave">
            <div className="content">
              <h5>WEBINARS</h5>
              <h5 className="projectheading">WEBINARS</h5>
            </div>
          </div>
    </div>
    <div className="events container">
        <div className="events row">
          {
            eventsData.filter((evt)=>evt.TypeOfEvent==='webinar').length==0 && <p className="text-center">No Webinars to display. :)</p>
          }
         { eventsData.map((evt)=>{
          if(evt.TypeOfEvent==='webinar')
          return(<EventCard evt={evt}/>);
      })  
        }
          <br />
        </div>
      </div>
      <div className="events Others-heading-div1">
        <div className="wave">
            <div className="content">
            <h5>OTHER_EVENTS</h5>
              <h5 className="projectheading">OTHER_EVENTS</h5>      
            </div>
          </div>
          
      </div>
      <div className="events container">
        <div className="events row">
          {
            eventsData.filter((evt)=>evt.TypeOfEvent==='other').length==0 && <p className="text-center">No Other events to display. :)</p>
          }
          { eventsData.map((evt)=>{
            if(evt.TypeOfEvent==='other')
            return(<EventCard evt={evt}/>);
        })
          }
          <br />
        </div>
      </div>
      <Footer2/>
        </div>
    </>
    );
}
export default Events;