const Home=()=>{
    return(
        <div>
{/*             

  
    <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <link rel="stylesheet" type="text/css" href="mss.css">   
<link rel="stylesheet"  href="css2/style.css" >

 */}
{/*
    <header>
        <div className="main">
            <div className="mj">
                <img src= "mj.jpg"/>
            </div>
            <ul>
                <li className="active" ><a href="index.html">HOME</a></li>
                <li><a href="projects.html">PROJECTS</a></li>
                <li><a href="events.html">EVENTS</a></li>
                <li><a href="hack.html">HACKATHON</a></li>
                <li><a href="media.html">MEDIA</a></li>
                <li><a href="team.html">TEAM</a></li>
                <li><a href="about.html">ABOUT US</a></li>
            </ul>
        </div>--> */}


<nav className="navbar navbar-inverse "  style="background-color: transparent;">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
     
      <a href="index.html"><img src="msslogo.jpeg"/></a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><a style="color: white;"href="index.html"><i className="fa fa-home"></i>  HOME</a></li>
        <li ><a style="color: white;" href="projects.html">PROJECTS</a></li>
        <li ><a style="color: white;"href="events.html">EVENTS</a></li>
        <li ><a style="color: white;" href="hack.html">HACKATHON</a></li>
        <li ><a style="color: white;" href="media.html">MEDIA</a></li>
     <li ><a style="color: white;" href="msslive.html">MSS LIVE</a></li> 
         <li className="dropdown"><a style="color: white;" className="dropdown-toggle" data-toggle="dropdown" href="#">ABOUT US<span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><a href="about.html">INFO</a></li>
          <li><a href="team.html">TEAM</a></li>
        </ul>  
        </li>   
        </ul>
    </div>
  </div>
</nav>

{/* <!--
<div className="container">
  <img className="img1" src="msslogo.png"> 
</div>--> */}

<div className="container slider">  
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* <!-- Indicators --> */}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>

      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
    
    </ol>

    {/* <!-- Wrapper for slides --> */}
    <div className="carousel-inner">
      <div className="item active">
        <img src="slider/s1.jpeg" style="width:100%;"/>
      </div>

      <div className="item">
        <img src="slider/s (2).jpeg"  style="width:100%;"/>
      </div>
    
      <div className="item">
        <img src="slider/s (3).jpeg" style="width:100%;"/>
      </div>
  

    
      <div className="item">
        <img src="slider/s (4).jpeg" style="width:100%;"/>
      </div>

      <div className="item">
        <img src="slider/s (5).jpeg" style="width:100%;"/>
      </div>
    
     
   
    </div>

    {/* <!-- Left and right controls --> */}
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>


<br/>
<br/><br/>


<svg viewBox="0 0 1000 300">
  <symbol id="s-text">
    <text text-anchor="middle"
          x="50%"
          y="25%"
          className="webcoderskull"
          >
      INNOVATE.
    </text>
    <text text-anchor="middle"
          x="50%"
          y="68%"
          className="webcoderskull"
          >
    INVENT . INSPIRE
    </text>
    
  </symbol>
  
  <g className="g-ants">
    <use xlinkHref="#s-text"
      className="webcoderskull-1"></use>     
    <use xlinkHref="#s-text"
      className="webcoderskull-1"></use>     
    <use xlinkHref="#s-text"
      className="webcoderskull-1"></use>     
    <use xlinkHref="#s-text"
      className="webcoderskull-1"></use>     
    <use xlinkHref="#s-text"
      className="webcoderskull-1"></use>     
  </g>
  
  
</svg>

<br/>
<br/><br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/><br/>
<br/><br/><br/>
<br/><br/><br/><br/>
<br/>
<br/>
<div className="bg-1">
  <div className="caption">
  <span className="border">MSS LIVE</span>
  </div>
</div>

<div style="color: white;background-color:transparent;text-align:center;padding:50px 80px;text-align: justify;">
  <h3 style="text-align:center;">TO BE LAUNCHED SOON....</h3>
 
</div>

<section className="agents-grid grid">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card-box-d">
            <div className="card-img-d">
              <span><img src="img/msslive.jpeg" alt="" className="img-d img-fluid"/></span>
            </div>
            <div className="card-overlay card-overlay-hover">
              <div className="card-header-d">
                <div className="card-title-d align-self-center">
                  <h3 className="title-d">
                    <a href="#" className="link-two" ><br/><br/><br/><br/><br/>MSS LIVE:</a>
                      
                  </h3>
                </div>
              </div>
              <br/><br/><br/>
              <div className="card-body-d">
                <p className="content-d color-text-a">
                 <strong>COMING SOON....</strong>  
                </p>
                
              </div>
            </div>
          </div>
        </div>

 <div className="col-md-4">
          <div className="card-box-d">
            <div className="card-img-d">
              <span><img src="img/msslearn.jpeg" alt="" className="img-d img-fluid"/></span>
            </div>
            <div className="card-overlay card-overlay-hover">
              <div className="card-header-d">
                <div className="card-title-d align-self-center">
                  <h3 className="title-d">
                    <a href="#" className="link-two"><br/>MSS LEARN</a>
                      
                  </h3>
                </div>
              </div>
              <br/>
              <div className="card-body-d">
                <p className="content-d color-text-a">
                  <strong></strong>
                </p>
                
              </div>
            </div>
          </div>
        </div>


     <div className="col-md-4">
          <div className="card-box-d">
            <div className="card-img-d">
              <span><img src="img/imaginehack.jpeg" alt="" className="img-d img-fluid"/></span>
            </div>
            <div className="card-overlay card-overlay-hover">
              <div className="card-header-d">
                <div className="card-title-d align-self-center">
                  <h3 className="title-d">
                    <a href="#" className="link-two"><br/><br/><br/><br/><br/><br/><br/>IMAGINE HACK</a>
                      
                  </h3>
                </div>
              </div>
              <br/>
              <div className="card-body-d">
                <p className="content-d color-text-a">
              
                </p>
                
              </div>
            </div>
          </div>
        </div>
            
</div></div>


</section>




<div className="bg-2">
  <div className="caption">
  <span className="border" style="background-color:transparent;font-size:25px;color: #f7f7f7;">DIGITALLY YOURS</span>
  </div>
</div>

<div style="position:relative;">
  <div style="color:white;background-color:grey;text-align:center;padding:50px 80px;text-align: justify;">
  <p align="center">"Every once in a while,a new technology,an old problem and a big idea turn into an innovation..." </p>
  </div>
</div>





























<br/><br/><br/><br/><br/><br/><br/><br/><br/>



<div className="embed-responsive embed-responsive-16by9">
  <iframe className="embed-responsive-item" src="mss.mp4" ></iframe>
</div>
<br/><br/>
<br/>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

















    {/* <!----------- Footer ------------> */}
    <footer className="footer-bs">
        <div className="row">

<div className="col-md-3 footer-ns animated fadeInRight">
              <h4>SIGNUP FOR THE BULLETIN </h4>
               
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Email Address"/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div>
                    {/* <!-- /input-group --> */}
                 
            </div>



          <div className="col-md-4 footer-nav animated fadeInUp">
              <h4></h4>
              <div className="col-md-6">
                    <ul className="pages">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="media.html">Media</a></li>
                        
                    </ul>
                </div>
              <div className="col-md-6">
                    <ul className="list">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="about.html">Contact Us</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
          <div className="col-md-2 footer-social animated fadeInDown">
              <h4>CONNECT WITH US</h4>
              <ul>   

                <a href="https://m.facebook.com/mss.mjcet.5?"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a><br/>
               
                
                  <a href="https://www.instagram.com/mssmjcet/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
             
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </ul>
            </div>
          


          
          <div className="col-md-3 footer-brand animated fadeInLeft">
             <br/>
             <br/>
             <br/>

                <p>© 2019, All rights reserved</p>
            </div>
        </div>
    </footer>

        </div>
    )
}
export default Home;