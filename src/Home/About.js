import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="mb-3">About Our Pharmacy</h1>
          <hr className="mt-5" />
          <div className="col-md-6">
            <img
              src="https://nextbigtechnology.com/wp-content/uploads/2021/03/Pharmacy-Management-Software-App-Development-img-01-768x768.jpg"
              style={{ width: '400%', height: '800%' }}
            />
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <img
              src="https://th.bing.com/th/id/R.db9c5e11aa19b2f37f8507f9c4700a1e?rik=TuQfJshPPYiKWg&riu=http%3a%2f%2fpihms.co.in%2fContent%2fimg%2ffeature_details%2fOut_Patient_Management.png&ehk=HGv1AUUdoj1tmQepxdCYTVJ%2bqyRG2PAjmlsjGtsTiL4%3d&risl=&pid=ImgRaw&r=0"
              style={{ width: '60%', height: 'auto' }}
            />
          <p>
            To provide our customers with the highest quality of care and
            medication at the most affordable prices.
          </p>
          
        </div>
        <div className="col-md-6">
          <h3>Our Vision</h3>
          <img
              src="https://img.freepik.com/premium-vector/health-care-isometric-concept-integrated-infographic-system-people-teamwork-doctor-anamnesis-diagnostic-lab-analysis-symbol-treatment-insure-emergency-clinic-pictogram_277697-385.jpg?w=740"
              style={{ width: '80%', height: 'auto' }}
            />
          <p>
            To be the premier pharmacy in our community, known for our
            exceptional service and commitment to our patients.
          </p>
        </div>
        <footer>
        <p>&copy; 2023 Union Center Pharmacy. All Rights Reserved.</p>
      </footer>
      </div>
      
    </div>
    
  );
 
};

export default About;

