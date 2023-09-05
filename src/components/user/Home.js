import Footer2 from "./Footer2";
import Hero from "./Hero";
import About from "./About";
import Carousel from "./Carousel";
import UserNavbar3 from "./UserNavbar3";

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
        <div className="">
          <UserNavbar3/>
          <Hero/>
          <About/>
          <Carousel/>
          <Footer2/>   
        </div>
    )
}
export default Home;