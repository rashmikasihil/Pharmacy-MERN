import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Us</h2><hr/>
        <div className="contact-image">
        <img src="https://th.bing.com/th/id/OIP.j79yC6EcSlOOBrcP_KXnCgAAAA?w=173&h=180&c=7&r=0&o=5&pid=1.7" height={200} width={200} alt="Contact Image" />
      </div><hr/>
        <p>Email: example@email.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, Anytown USA</p>
      </div>
      
      <div className="contact-footer">
        <p>&copy;  2023 Union Center Pharmacy. All Rights Reserved.</p>
      </div>
      <style jsx>{`
        .contact-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f2f2f2;
        }

        .contact-info {
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-image {
          max-width: 100%;
          height: auto;
          margin-bottom: 2rem;
        }

        .contact-footer {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.8rem;
          color: #888;
        }
      `}</style>
    </div>
  );
};

export default Contact;
