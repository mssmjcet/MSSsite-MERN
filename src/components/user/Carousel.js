import React, { useState } from 'react';
import "./../../assets/css/homeEvents.css";
import image  from "./../../assets/images/events.jpg";
import { useEffect } from 'react';

const Carousel = () => {

  const [eventData,setEventData]=useState([]);
  useEffect(()=>{
    fetchEventsData();
},[]);

const fetchEventsData=()=>{
    fetch('/api/admin/Event').then((res)=>res.json())
    .then((data)=>{
        if(data.eventsData)
        setEventData(data.eventsData);
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

    
    <div className="carousel">

      <div className='carousel-heading-container'>
        <h1 className='carousel-heading'>Events</h1>
      </div>

        <button className="carousel-arrow left" onClick={goToPreviousSlide}>
          &lt;
        </button>

        {
          <div key={eventData[currentIndex]?._id} className="carousel-item">
              <img className='carousel-img' src={"/images/uploaded/" + eventData[currentIndex]?.EventImage} alt="" />
              
              <div className='event-info'>
                  <div className="eventName">{eventData[currentIndex]?.Name}</div>
                  <div className="date">{eventData[currentIndex]?.StartDate}</div>
                  <div className="time">{eventData[currentIndex]?.Time}</div>
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
