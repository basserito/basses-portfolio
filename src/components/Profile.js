import React from 'react';
import profileImage from '../assets/img/profile.JPG'; // Replace with your actual image path

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-text">
        <h2>Who am I?</h2>
        <p>
        Hey there! 👋 I'm Basant, a BSc Computer Science student at Aalto University, passionate about machine learning and with a keen eye for visual aesthetics. My coding journey started with curiosity, blossoming into a love for crafting solutions and exploring the vast potential of technology. 🚀
        </p>
        <p>
        Fueled by insatiable curiosity, I'm always eager to learn and stay at tech's forefront. Currently pursuing my computer science degree, I bring a solid foundation in languages like Python and Scala, paired with a visual eye that elevates both the aesthetics and user-centricity of my projects.
        </p>
      </div>
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default Profile;
