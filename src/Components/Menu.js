import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";
import { menuItems,settings } from "./menuItems";

const Menu = ({ children }) => {

  //for conditional renering using window width

    const [width, setWidth] = useState(window.innerWidth);
   
  

    useEffect(() => {
     const handleWindowResize = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleWindowResize);
  
      
     return () => window.removeEventListener("resize", handleWindowResize);
    },[]);

    console.log(width)
  

  return (
    <div className="main-container">
      <div  style={{width: width > 900 ? "15%" : "5%"}} className="menu-container"  >
        <h2 style={{display: width > 900 ? "block" : "none"}}>KCT Portal</h2>
        <div className="ul-container">
          <div className="ul-a">
            <ul className="menu-ul">
            {
              menuItems.map((data, index) => {
                  return <NavLink to={data.path} key={index}>
                    <li>
                      <span >{data.icon}</span>
                      <span style={{display: width > 900 ? "inline" : "block", fontSize: width>900 ? "" : "8px"}} className="menu-title">{data.name}</span>
                    </li>
                  </NavLink>
              })
            }
            </ul>
          </div>

          <div className="ul-b">
            <ul className="menu-ul">
              {
                settings.map((data,index) => {
                  return <li>
                    <NavLink to={data.path}>
                      {data.icon}
                      <span style={{display: width > 900 ? "inline" : "block",fontSize: width>900 ? "" : "8px"}} className="menu-title">{data.name}</span> 
                    </NavLink>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <main>{children}</main>


      
    </div>
  );
};

export default Menu;
