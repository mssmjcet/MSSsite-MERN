import { useEffect, useState } from "react";
import "./../../assets/css/projects.css";
import Footer2 from "./Footer2";
import UserNavbar3 from "./UserNavbar3";

const Projects = () => {
  const [projectsData, setProjectData] = useState([]);
  const [baseImageURL,setBaseImageURL]=useState(" ");
  useEffect(() => {
    if(process.env.REACT_APP_ENABLE_LOCAL_DATA_FILES==='true')
      {
        getFiles();
        setBaseImageURL("./images/uploads/");
      }
    else
      {
        fetchProjectData();
       setBaseImageURL(process.env.REACT_APP_BACKEND_UPLOADS_BASE_PATH);
      }
  }, []);

  //retrieve project data from local file projects.json
  const getFiles=()=>{
    fetch('./jsonFiles/projects.json',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      setProjectData(res);
    });
    console.log("done");
  }

  //retrieve project data from backend
  const fetchProjectData = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_API_URL+"/users/Project");
      const data = await res.json();
      setProjectData(data.projectsData);
      console.log(data);
    } catch (error) {
      console.log("error in fetching projects data");
    }
  };
  


  return (
    <div className="">
      <UserNavbar3 />
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
        {
          projectsData.length===0 && <p className="text-center">No projects to display. :)</p>
        }
        {projectsData.map((projectData) => {
          return(
            <div className=" edges bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5 projects-heading">{projectData.Name}</h2>
              <p className="lead">{projectData.Description}</p>
              <a href={projectData.ProjectLink}><button className="btn btn-outline-primary">Link to Project</button></a>
            </div>

            <div className="bg-dark shadow-sm mx-auto">
              <img
                className="image_project"
                src={ baseImageURL+ projectData.Image}
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
      <br/>
      <br/>
      <Footer2/>
    </div>
  );
};
export default Projects;
