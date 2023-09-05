import { useEffect, useState } from "react";
import "./../../assets/css/Teams2.css";
import "./../../assets/css/execom.css";

import Footer2 from "./Footer2";
import UserNavbar3 from "./UserNavbar3";
const Teams = () => {
  
  const [baseImageURL,setBaseImageURL]=useState(" ");
    
  const [teamDetails, setTeamDetails] = useState([]);

  useEffect(() => {
    if(process.env.REACT_APP_ENABLE_LOCAL_DATA_FILES==='true')
      {
        getFiles();
        setBaseImageURL("./images/uploads/");
      }
    else
      {
        fetchTeamsData();
       setBaseImageURL(process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH);
      }
  }, []);


//retrieve teams data from local file teams.json
  const getFiles = () => {
    fetch("/jsonFiles/teams.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        //   setImgUrl(res.imgUrl);
        setTeamDetails(res);
      });
    console.log("done");
  };

  //retrieve teams data from backend
  
  const fetchTeamsData=()=>{
    fetch(process.env.REACT_APP_BACKEND_API_URL+"/users/Team").then((res)=>res.json())
    .then((data)=>{
        if(data.membersData)
        setTeamDetails(data.membersData);
        console.log(data);
    })
    console.log("fetched");
}



  return (
    <div className=" teams ">
      <UserNavbar3 />
      <br />
      <br />
      {/* heading */}
      <div className=" teams teams_div1">
        <div className="wave">
            <div className="content">
              <h2>Teams</h2>
              <h2 className="projectheading">Teams</h2>
            </div>
          </div>
      </div>

{/* Faculty Coordinators */}
      <div className=" teams teams_div1">
        <h2 className=" teams Governing_bd_h2">Faculty Coordinators</h2>
      </div>
      <br />
      <br />

     
      <div className=" teams container">
        <div className=" teams row row-cols-1 row-cols-md-3 justify-content-evenly">
          {
           teamDetails?.filter(mem=>mem.PositionType==='Faculty_Coordinator')?.length===0 &&
           <p className="text-center">No Faculty Coordinators present to display. :)</p> 
          }
          {teamDetails?.filter(mem=>mem.PositionType==='Faculty_Coordinator')?.map((member, index) => {
              return (
                <div className=" teams col">
                  <div className=" teams text-center">
                    <img
                      src={baseImageURL + member?.ImgUrl}
                      className=" teams rounded-circle"
                      alt="..."
                    />
                    <figcaption className=" teams figure-caption text-center">
                      <br />
                      <h2>{member?.Name}</h2>
                      <h3>{member?.PositionName}</h3>    
                    </figcaption>
                  </div>
                </div>
              );
            
          })}
        </div>
      </div>


      {/* Governing Body */}
      <div className=" teams teams_div1">
        <h2 className=" teams Governing_bd_h2">Governing Body</h2>
      </div>
      <br />
      <br />

      <div className=" teams container">
          {
           teamDetails?.filter(mem=>mem.PositionType==='Governing_Body')?.length===0 &&
           <p className="text-center">No Governing Body members present to display. :)</p> 
          }
        <div className=" teams row row-cols-1 row-cols-md-3 justify-content-center">
          
          {teamDetails?.filter(mem=>mem.PositionType==='Governing_Body')?.map((member, index) => {
            
              return (
                <div className=" teams col">
                  <div className=" teams text-center">
                    <img
                      src={baseImageURL + member?.ImgUrl}
                      className=" teams rounded-circle"
                      alt="..."
                    />
                    <figcaption className=" teams figure-caption text-center">
                      <br />
                      <h5>{member?.Name}</h5>
                      <h6>{member?.PositionName}</h6>
                    </figcaption>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
      <br />
      <br />


      {/* execom */}
      <div className=" teams execom">
        <div className=" teams teams_div1">
          <h2 className=" teams execom_h2">Execom</h2>
        </div>
      </div>
      <br />

           {
             teamDetails?.filter(mem=>mem.PositionType==='Execom')?.length===0 &&
             <p className="text-center">No Execom members present to display. :)</p> 
            }
          <div className="new-execom-container ">
           
            {teamDetails?.filter(mem=>mem.PositionType==='Execom')?.map((member) => {
              return (
                
                    <div className="new-execom-card">
                        <div className="new-execom-card-img">
                          <img src={baseImageURL + member?.ImgUrl}  alt="" />
                        </div>
                      <div className="execom-content">
                        <h2>{member?.Name}</h2>
                        <h4>{member?.PositionName}</h4>
                      </div>
                  </div>
                
                
              );

            }
            
            )}
            </div>
      <br />
      <br />

      <Footer2 />
    </div>
  );
};

export default Teams;