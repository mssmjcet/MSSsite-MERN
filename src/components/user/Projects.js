import { useEffect } from "react";
import UserNavbar from "./UserNavbar";
import UserNavbar2 from "./UserNavbar2";

const Projects=()=>{
    useEffect(()=>{
        getFiles();
          },[])
          const getFiles=()=>{
            fetch('./jsonFiles/projects.json',{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }).then((res)=>res.json())
            .then((res)=>{
              console.log(res);
           //   setImgUrl(res.imgUrl);
            });
            console.log("done");
          
          }
    return(
        <div className="container">
            <UserNavbar2/>
            <br/>
            <br/>
            <h1>Projects Page</h1>
        </div>
    );
}
export default Projects;