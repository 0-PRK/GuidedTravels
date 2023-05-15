import React from "react";
import Carousel from 'react-bootstrap';


const Carousel1 = () => {
    return (
  
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="bkt" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="bkt" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="bkt" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="bkt" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="bkt" alt="Fifth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="bkt" alt="Sixth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="bkt" alt="Seventh slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="bkt" alt="Eighth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="bkt" alt="Ninth slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  };
  
  export default Carousel1;