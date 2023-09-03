import React from "react";

const Profile = (props) => {
  const myProfile = (
    <div>
      {props.profile.map((pro) => (
        <div className="item" key={pro.ProfileDescription}>
          <p>{pro.ProfileDescription}</p>
        </div>
      ))}
    </div>
  ) 

  return (
    <div className="title">
      <i className="fa fa-user"></i>
      <h2>PERFIL</h2>
      {myProfile}
    </div>
  );
};

export default Profile;
