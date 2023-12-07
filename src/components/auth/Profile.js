import React, { useState, useContext } from 'react';
import { UserContext } from '../../App';
import './Profile.css'

const Profile = () => {
  const { userData } = useContext(UserContext);
  const [imageSrc, setImageSrc] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageSrc(imageUrl);
  };

  const handleDeleteImage = () => {
    setImageSrc('');
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };
  

  const mainStyle = {
    backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/002/196/212/large_2x/abstract-blue-hexagon-pattern-background-medical-and-science-concept-and-health-care-icon-pattern-free-vector.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjusted to cover the entire viewport
    width:'200vh',
    margin: 0, // Remove default margin from the body
    padding: 0, // Remove default padding from the body
    
  };
  

  return (
    <div className="container mt-5" style={mainStyle}>
      <img
                src={require('../auth/logoo.png')}
                alt="Login"
                style={{ width: '100px', height: '100px' }}
                
              />
      
      <div className="row justify-content-center">
      <h1 className="text-center mb-4">𝘾𝙪𝙨𝙩𝙤𝙢𝙚𝙧 𝙋𝙧𝙤𝙛𝙞𝙡𝙚</h1>
     <div className="col-lg-6 col-md-8 col-sm-10">
     <div className="card p-4 text-center profile-card">
      <div className="profile-image-container">
        <div className="profile-image-placeholder">
          {imageSrc ? (
            <img src={imageSrc} alt="Profile" className="profile-image rounded-circle" />
          ) : (
            <span className="profile-image-placeholder-text">No Image</span>
          )}
        </div>
        <div>
          <label className="btn btn-primary mt-2">
            {imageSrc ? 'Change Image' : 'Add Image'}
            <input type="file" hidden onChange={handleImageUpload} />
          </label>
          {imageSrc && (
            <button className="btn btn-danger mt-2 ml-2" onClick={handleDeleteImage}>
              Delete Image
            </button>
          )}
        </div>
      </div>
      <div className="profile-details mt-4">
        <h4>
          <b>User ID:</b> {userData.user.id}
        </h4>
        <h4>
          <b>User Name:</b> {userData.user.name}
        </h4>
        <h4>
        <b>Register Date:</b> {formatDate(userData.user.date)}
        </h4>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Profile;
