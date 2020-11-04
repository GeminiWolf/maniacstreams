import React from "react";
import "./profile.css";

const Profile = () => {
  const blockshow = () => {
    var val = []
    for (var c = 0; c < 10; c++) {
      val.push(<div key={`${c}`} className="series-block"></div>)
    }
    return val;
  }


  return (
    <div className="profile-container">
      <div className="name">
        <h1>name</h1>
      </div>
      <div className="series-container">
        <div className="block-title">Watching</div>
        <div className="watch-blocks">
          {blockshow()}
        </div>
      </div>
    </div>
  );
}

export default Profile;