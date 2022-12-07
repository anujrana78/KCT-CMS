import React from "react";

import "./dashboard.css";
import DateBox from "./DateBox";
import IdCard from "./IdCard";
import {
  MdOutlineTimeToLeave,
  MdOutlineMessage,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="notice-id-container row">
        <div className="col-md-10 carousel-container">
        <div
          id="carouselExampleControls"
          class="carousel slide carousel-over"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 slider-img"
                id="img-confirm"
                src="./1.png"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 slider-img"
                id="img-confirm"
                src="./2.png"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 slider-img"
                id="img-confirm"
                src="./3.png"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
        </div>
        <div className="col-md-2">
          <IdCard />
        </div>
      </div>

      <div className="bottom-container">
        <div className="bottom-container-a row">

         <div className="col-md-4 box-wrapper">
          <div className="box">
            <a href="">
              <MdOutlineAdminPanelSettings className="box-icon" />
              <div>
              <h5>Contact Admin</h5>
              <p>Have a query? Get connected to the admin now.</p>
              </div>
            </a>
          </div>
          </div>

          <div className="col-md-4 box-wrapper ">
            <div className="box ">
              <a href="mailto:contact@kct.edu.np">
                <MdOutlineTimeToLeave className="box-icon" />
                <div>
                <h5>Request Leave</h5>
                <p>Submit a leave application now.</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4 box-wrapper ">
          <div className="box">
            <a href="">
              <MdOutlineMessage className="box-icon" />
              <div>
              <h5>Kaizala</h5>
              <p>Connect with us on Kaizala</p>
              </div>
            </a>
          </div>
          </div>

        </div>
        <div className="">
          <DateBox />
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
