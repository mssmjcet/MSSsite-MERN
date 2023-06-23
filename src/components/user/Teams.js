import { useEffect, useState } from "react";
import "./../../assets/css/Teams2.css";
import "./../../assets/css/execom.css";
import UserNavbar2 from "./UserNavbar2";
import Footer2 from "./Footer2";
const Teams = () => {
  const baseUrl = "/images/static/teams";
  const [teamDetails, setTeamDetails] = useState({
    facultyCoordinator: {
      position: "dummy",
      name: "dummy",
    },
    governingBody: [
      {
        position: "dummy",
        name: "dummy",
      },
      {
        position: "dummy",
        name: "dummy",
      },
      {
        position: "dummy",
        name: "dummy",
      },
      {
        position: "dummy",
        name: "dummy",
      },
      {
        position: "dummy",
        name: "dummy",
      },
      {
        position: "dummy",
        name: "dummy",
      },
      {
        position: "dummy",
        name: "dummy",
      },
    ],
    execom: [
      {
        position: "dummy",
        name: "dummy",
      },
    ],
  });
  useEffect(() => {
    getFiles();
  }, []);
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

  return (
    <div className=" teams ">
      <UserNavbar2 />
      <br />
      <br />
      {/* heading */}
      <div className=" teams teams_div1">
        {/* <h1 className=" teams teams_h1">Teams</h1> */}
        <div className="wave">
            <div className="content">
              <h2>Teams</h2>
              <h2 className="projectheading">Teams</h2>
            </div>
          </div>
      </div>

      {/* faculty co-Ahmed Choush */}
      <div className=" teams faculty_co">
        <figure className=" teams figure">
          <img
            src={baseUrl + "/" + teamDetails.facultyCoordinator.imgUrl}
            className=" teams img-fluid figure-img rounded w-75"
            alt="Error Displaying img"
          />
          <figcaption className=" teams figure-caption text-center">
            <br />
            <h1>{teamDetails.facultyCoordinator.position}</h1>
            <h3>{teamDetails.facultyCoordinator.name}</h3>
          </figcaption>
        </figure>
      </div>
      <br />
      <br />

      {/* Governing Body */}
      <div className=" teams teams_div1">
        <h2 className=" teams Governing_bd_h2">Governing Body</h2>
      </div>
      <br />
      <br />

      <div className=" teams row">
        <div className=" teams text-center">
          <img
            src={baseUrl + "/" + teamDetails.governingBody[0].imgUrl}
            className=" teams rounded-circle"
            alt="..."
          />
          <figcaption className=" teams figure-caption text-center">
            <br />
            <h5>{teamDetails.governingBody[0].position}</h5>
            <h6>{teamDetails.governingBody[0].name}</h6>
          </figcaption>
        </div>
      </div>
      <br />
      <br />
      {/* 2nd an 3rd Rows */}
      <div className=" teams container">
        <div className=" teams row row-cols-1 row-cols-md-3">
          {teamDetails.governingBody.map((member, index) => {
            //console.log(member.imgUrl);

            if (index !== 0)
              return (
                <div className=" teams col">
                  <div className=" teams text-center">
                    <img
                      src={baseUrl + "/" + member.imgUrl}
                      className=" teams rounded-circle"
                      alt="..."
                    />
                    <figcaption className=" teams figure-caption text-center">
                      <br />
                      <h5>{member.position}</h5>
                      <h6>{member.name}</h6>
                    </figcaption>
                  </div>
                </div>
              );
            else {
              //console.log(img);
              return <></>;
            }
          })}
        </div>
      </div>

      {/* Governing Body */}
      <br />
      <br />
      {/* execom */}
      <div className=" teams execom">
        <div className=" teams teams_div1">
          <h2 className=" teams execom_h2">Execom</h2>
        </div>
      </div>
      <br />

      {/* <div class="new-execom-container">
        <div class="new-execom-card">
            <div class="new-execom-card-img">
                <img src="../images/faculty_co.jpg"  alt="" />
            </div>
            <div class="execom-content">
                <h2>Team Representative</h2>
                <h4>MD. Amaan Mohiuddin</h4>
            </div>
        </div>
        </div> */}

      {/* <div className=" teams container">
        <div>
          <div className=" teams row execom-row row-cols-1 row-cols-md-2 row-cols-lg-3"> */}
          <div className="new-execom-container">
            {teamDetails.execom.map((member) => {
              return (
                
                    <div className="new-execom-card">
                        <div className="new-execom-card-img">
                          <img src={baseUrl + "/" + member.imgUrl}  alt="" />
                        </div>
                      <div className="execom-content">
                        <h2>{member.position}</h2>
                        <h4>{member.name}</h4>
                      </div>
                  </div>
                
                
              );

            }
            
            )}
            </div>
          {/* </div>
        </div>
      </div> */}
      <br />
      <br />
      <Footer2 />
    </div>
  );
};

export default Teams;
