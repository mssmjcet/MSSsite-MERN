import { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import UserNavbar2 from "./UserNavbar2";

const Home=()=>{
  const [imgUrl,setImgUrl]=useState(" ");
  useEffect(()=>{
getFiles();
  },[])
  const getFiles=()=>{
    fetch('./jsonFiles/home.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      setImgUrl(res.imgUrl);
    });
    console.log("done");
  
  }
    return(
        <div className="container">
          <UserNavbar2/>
          <br/>
          <br/>
          <h1>Home page</h1>
          <button onClick={getFiles}>Click</button>
          <img src={"/images/"+imgUrl}/>
        </div>
    )
}
export default Home;