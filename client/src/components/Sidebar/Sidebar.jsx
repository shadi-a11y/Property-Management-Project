import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
            >
              {" "}
              <div id="icon">{val.icon}</div>{" "}
              <div id="title">
                <Link className="row" to={val.link}>
                  {val.title}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
