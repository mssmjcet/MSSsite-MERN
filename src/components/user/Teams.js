import { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import "./../../assets/css/Teams2.css"
import UserNavbar2 from "./UserNavbar2";
import Footer from "./Footer";
const Teams=()=>{
  const [teamDetails,setTeamDetails]=useState(
    {
      "facultyCoordinator":{
        "position":"dummy",
        "name":"dummy"
      },
      "governingBody":[{
        "position":"dummy",
        "name":"dummy"
      },{
        "position":"dummy",
        "name":"dummy"
      },{
        "position":"dummy",
        "name":"dummy"
      },{
        "position":"dummy",
        "name":"dummy"
      },{
        "position":"dummy",
        "name":"dummy"
      },{
        "position":"dummy",
        "name":"dummy"
      },{
        "position":"dummy",
        "name":"dummy"
      }],
      "execom":[{
        "position":"dummy",
        "name":"dummy"
      }]
    });
    useEffect(()=>{
        getFiles();
          },[])
          const getFiles=()=>{
            fetch('./jsonFiles/teams.json',{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }).then((res)=>res.json())
            .then((res)=>{
              console.log(res);
           //   setImgUrl(res.imgUrl);
           setTeamDetails(res);
            });
            console.log("done");
          
          }

    return(
        <div className=" teams container-fluid">
            <UserNavbar2/>
            <br/>
            <br/>
            {/* heading */}
    <div className=" teams teams_div1">
      <h1 className=" teams teams_h1">Teams</h1>
    </div>

    {/* faculty co-Ahmed Choush */}
    <div className=" teams faculty_co">
      <figure className=" teams figure">
        <img
          src={"/assets/images/teams/"+teamDetails.facultyCoordinator.imgUrl}
          className=" teams figure-img img-fluid rounded w-75"
          alt="Error Displaying img"
        />
        <figcaption className=" teams figure-caption text-center">
          <br />
          <h1>{teamDetails.facultyCoordinator.position}</h1>
          <h3>{teamDetails.facultyCoordinator.name}</h3>
        </figcaption>
      </figure>
    </div>
    <br /><br />

    {/* Governing Body */}
    <div className=" teams teams_div1">
      <h2 className=" teams Governing_bd_h2">Governing Body</h2>
    </div>
    <br /><br />

    <div className=" teams row">
      <div className=" teams text-center">
        <img src={"/assets/images/teams/"+teamDetails.governingBody[0].imgUrl} className=" teams rounded-circle" alt="..." />
        <figcaption className=" teams figure-caption text-center">
          <br />
          <h5>{teamDetails.governingBody[0].position}</h5>
          <h6>{teamDetails.governingBody[0].name}</h6>
        </figcaption>
      </div>
    </div>
    <br /><br />
    {/* 2nd an 3rd Rows */}
    <div className=" teams container">
      <div className=" teams row row-cols-1 row-cols-md-3">
        {teamDetails.governingBody.map((member,index)=>{
          if(index!==0)
          return(
          <div className=" teams col">
          <div className=" teams text-center">
            <img src={"/assets/images/teams/"+member.imgUrl} className=" teams rounded-circle" alt="..." />
            <figcaption className=" teams figure-caption text-center">
              <br />
              <h5>{member.position}</h5>
              <h6>{member.name}</h6>
            </figcaption>
          </div>
        </div>);
        })
        }
      </div>
      </div>
        

    {/* Governing Body */}
    <br /><br />
    {/* execom */}
    <div className=" teams execom">
      <div className=" teams teams_div1">
        <h2 className=" teams execom_h2">Execom</h2>
      </div>
    </div>
    <br />
    <div className=" teams container">
      
      <div>
      
        <div className=" teams row execom-row row-cols-1 row-cols-md-3">
          
         {teamDetails.execom.map((member)=>{
          return(
            <div className=" teams col mx-auto">
            <div className=" teams card" >
            {/* style={{width: "18rem"}} */}
            <img src={"/assets/images/teams/"+member.imgUrl} className=" teams card-img-top specialImg img-fluid " alt="" />
              <div className=" teams card-body">
                <figcaption className=" teams figure-caption text-center">
                  <br />
                  <h5>{member.position}</h5>
                  <h6>{member.name}</h6>
                </figcaption>
                {/* <h5 className=" teams card-title">John Wick</h5>

              <a href="" className=" teams btn">Know More</a> */}
              </div>
              
            </div>
          </div>
          );
         }) 
          }
          
        </div>
      </div>
      
        </div>
        <br/>
        <br/>
        <Footer/>
       </div>     
    );
}

export default Teams;