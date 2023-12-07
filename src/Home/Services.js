import React from 'react';


const Services = () => {
  return (
    <div className="services-page">
      <div className="services-info">
        <h2>Our Services</h2><hr/>
        <div className="services-image">
        <img src="https://th.bing.com/th/id/OIP.WLXDfZCEe0zC5lj_ByhwGwHaHa?pid=ImgDet&w=205&h=205&c=7" alt="Services Image" />
      </div><hr/>
        <p>We offer a variety of services to meet your healthcare needs:</p>
        <ul>
          <li>Prescription fulfillment</li>
          <li>Compounding</li>
          <li>Immunizations</li>
          <li>Medication therapy management</li>
        </ul>
      </div>
      
      <div className="services-footer">
        <p>&copy; 2023 Union Center Pharmacy. All Rights Reserved.</p>
      </div>
      <style jsx>{`
        .services-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f2f2f2;
        }

        .services-info {
          text-align: center;
          margin-bottom: 2rem;
        }

        .services-image {
          max-width: 100%;
          height: auto;
          margin-bottom: 2rem;
        }

        .services-footer {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.8rem;
          color: #888;
        }
      `}</style>
    </div>
  );
};

export default Services;
