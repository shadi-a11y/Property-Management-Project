import React from "react";
import { MyProfileData } from "./MyProfileData";
import "./MyProfile.css";

const MyProfile = () => {
  return (
    <div className="MyProfile">
      <div className="section">
        <div className="image">
          <img src={MyProfileData.avatar} alt="" />
        </div>
        <div className="info">
          <div className="name">
            <p>Name:</p>
            <h2>{MyProfileData.name}</h2>
          </div>
          <div className="email">
            <p>Email: </p>
            <h3>{MyProfileData.email}</h3>
          </div>
          <div className="age">
            <p>Account Age:</p>
            <p>{MyProfileData.accountAge}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
