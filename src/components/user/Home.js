import { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import Footer2 from "./Footer2";

import UserNavbar2 from "./UserNavbar2";
import Hero from "./Hero";
import About from "./About";
import Carousel from "./Carousel";

const Home=()=>{
//   const [imgUrl,setImgUrl]=useState(" ");
//   useEffect(()=>{
// getFiles();
//   },[])
//   const getFiles=()=>{
//     fetch('./jsonFiles/home.json',{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }).then((res)=>res.json())
//     .then((res)=>{
//       console.log(res);
//       setImgUrl(res.imgUrl);
//     });
//     console.log("done");
  
//   }
    return(
        <div >
          <UserNavbar2/>
          <Hero/>
          <About/>
          <Carousel/>
          {/* <div >
          <Footer />
          </div> */}
          <Footer2/>
          

          


          {/* <br/>
          <br/>
          <h1>Home page</h1> */}
          {/* <button onClick={getFiles}>Click</button>
          <img src={"/images/"+imgUrl}/> */}
          
        
        </div>
    )
}
export default Home;