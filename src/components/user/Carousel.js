import React, { useState } from 'react';
import "./../../assets/css/homeEvents.css";
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Carousel = () => {

  const [eventData,setEventData]=useState([]);
  const [baseImageURL,setBaseImageURL]=useState(" ");
  useEffect(()=>{
    if(process.env.REACT_APP_ENABLE_LOCAL_DATA_FILES==='true')
    {
      getFiles();
      setBaseImageURL("./images/uploads/");
    }
    else
    {
      fetchEventsData();
      setBaseImageURL(process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH);
    }
    
  },[]);
  
  const filterEventsData=(data)=>{
    let filteredEvts=data.filter((evt)=>evt.StateOfEvent!=='ended')
    console.log(filteredEvts)
    return filteredEvts;
  }

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
    let filteredRes=filterEventsData(res);
    setEventData(filteredRes);
    });
    console.log("done");
  }

  const fetchEventsData=()=>{
      fetch(process.env.REACT_APP_BACKEND_API_URL+'/users/Event').then((res)=>res.json())
      .then((data)=>{
          if(data.eventsData)
          {
            let filteredRes=filterEventsData(data.eventsData);
          setEventData(filteredRes);
          }
          console.log(data);
          console.log(data.eventsData);
      })
      console.log("fetched");
  }

  // const carouselData = [
  //   { id: 1, imageUrl: image, date: '2022-11-30', eventName:"Imagine Hack1", time:"12:30"},
  //   { id: 2, imageUrl: image, date: '2021-0-30',eventName:"Machine Learning", time:"12:30" },
  //   { id: 3, imageUrl: image, date: '2023-12-30',eventName:"Runtime Error", time:"12:30" },
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? eventData.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === eventData.length - 1 ? 0 : prevIndex + 1));
  };

  return (

    
    <div className="carousel mt-5">

      <div className='carousel-heading-container'>
        <h1 className='carousel-heading'>Events</h1>
      </div>

        <button className="carousel-arrow left" onClick={goToPreviousSlide}>
          &lt;
        </button>

        {
          <div key={eventData[currentIndex]?._id} className="carousel-item m-5">
              <img className='carousel-img' src={baseImageURL + eventData[currentIndex]?.EventImage} alt="" />
              
              <div className='event-info'>
                  <div className="eventName">{eventData[currentIndex]?.Name}</div>
                  <div className="date">Date: {eventData[currentIndex]?.StartDate}</div>
                  <div className="time">Time: {eventData[currentIndex]?.Time}</div>
                  <div className="status">
                    Status: {eventData[currentIndex]?.StateOfEvent==='new'&& <button className="btn btn-sm btn-primary">upcoming</button>}
                    {eventData[currentIndex]?.StateOfEvent==='active' && <button className="btn btn-sm btn-success">Live</button>}
                    {eventData[currentIndex]?.StateOfEvent==='ended' && <button className="btn btn-sm btn-danger">completed</button>}
                  </div>
                  <div><NavLink to="/events" className='btn btn-outline-primary m-3'>More details...</NavLink></div>
              </div>
              
          </div>
        
        }

        <button className="carousel-arrow right" onClick={goToNextSlide}>
          &gt;
        </button>

    </div>
  );
};

export default Carousel;
