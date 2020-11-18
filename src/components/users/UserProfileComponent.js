import React from "react";
// import avatar from "./default-profile-picture.jpg";
// import { IMGS_BASE_URL } from "../actions/file";
import "./UserProfile.scss";

const UserProfileComponent = ({ children, image, title }) => (
  <div className="col-md-8">
    <div className="user-profile">
      {/* <div className="profile__avatar">
        <div className="profile__avatar__image">
          <img
            alt="user profile pic"
            src={image ? IMGS_BASE_URL + image : avatar}
          ></img>
        </div>
      </div> */}
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);

const UserProfileField = ({ name, value }) => {
  if (value === "" || typeof value === "undefined") return null;
  return (
    <div className="user-profile__field">
      <div className="user-profile__field__name">{name}</div>
      <div className="user-profile__field__value">{value}</div>
    </div>
  );
};

export { UserProfileComponent, UserProfileField };
