import React from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";

const Dashboard = () => {
  return (
    
    <div>
      
      
      <div className="dashboard-header">
      <img
                src={require('../image/logoo.png')}
                alt="Login"
                style={{ width: '100px', height: '100px' }}
              />
        <h1 class="dashboard-title">DASHBOARD</h1>
             
        
      </div>
      <hr/>
      <img
          src="https://rxcarespecialty.com/_next/static/images/banner2.png"
          alt="Dashboard Image"
          className="dashboard-image"
        />
      <div className="management-buttons">
        <Link to="/customer-management">
          <button className="management-button">Customer Management</button>
        </Link>
        <Link to="/employee-management">
          <button className="management-button">Employee Management</button>
        </Link>
        <Link to="/delivery-management">
          <button className="management-button">Delivery Management</button>
        </Link>
        <Link to="/stock-management">
          <button className="management-button">Stock Management</button>
        </Link>
        <Link to="/sales-management">
          <button className="management-button">Sales Management</button>
        </Link>
        <Link to="/order-management">
          <button className="management-button">Order Management</button>
        </Link>
        <Link to="/payment-management">
          <button className="management-button">Payment Management</button>
        </Link>
        <Link to="/supplier-management">
          <button className="management-button">Supplier Management</button>
        </Link>
      </div>
      
      <hr/>
      <footer>
        <p>&copy; 2023 Union Center Pharmacy. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
