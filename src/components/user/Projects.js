import { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import UserNavbar2 from "./UserNavbar2";
import "./../../assets/css/projects.css";
import image from "./../../assets/images/projects.jpeg";
import Footer2 from "./Footer2";

const Projects = () => {
  const [projectsData, setProjectData] = useState([]);
  // useEffect(()=>{
  //     getFiles();
  //       },[])

  // const getFiles=()=>{
  //   fetch('./jsonFiles/projects.json',{
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }).then((res)=>res.json())
  //   .then((res)=>{
  //     console.log(res);
  //  //   setImgUrl(res.imgUrl);
  //   });
  //   console.log("done");
  // }

  const fetchProjectData = async () => {
    try {
      const res = await fetch("/api/admin/Project");
      const data = await res.json();
      setProjectData(data.projectsData);
      console.log(data);
    } catch (error) {
      console.log("error in fetching projects data");
    }
  };
  useEffect(() => {
    fetchProjectData();
  }, []);


  return (
    <div className="">
      <UserNavbar2 />
      <br />
      <br />

      <div className="position-relative overflow-hidden p-10 p-md-5 m-md-3 text-center ">
        <div className="projectsHeadingContainer">
          <div className="wave">
            <div className="content">
              <h2>Projects</h2>
              <h2 className="projectheading">Projects</h2>
            </div>
          </div>
        </div>

        {/* <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div> */}
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        {projectsData.map((projectData) => {
          return(
            <div className=" edges bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5 projects-heading">{projectData.Name}</h2>
              <p className="lead">{projectData.Description}</p>
            </div>

            <div className="bg-dark shadow-sm mx-auto">
              <img
                className="image_project"
                src={"/images/uploaded/" + projectData.Image}
                alt="project_img"
              />
            </div>
          </div>
          )

        })}

        {/* <div
            className=" edges bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
          >
            <div className="my-3 p-3">
              <h2 className="display-5">Another Project</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
            
            >
              <img
                className="image_project"
                src={image}
                alt="project_img"
              />
            </div>
          </div> */}
      </div>
      <Footer2/>
    </div>
  );
};
export default Projects;
