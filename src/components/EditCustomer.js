import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';
import axios from 'axios';
import { Button, Form, Alert, Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditCustomer = () => {

  const { userData, setUserData} = useContext(UserContext);

  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    nic: '',
    description: ''
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get(`/api/fruits/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.log(error));
  }, [id]);

  useEffect(() => {
    axios.get('/api/fruits')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const userUpdate = () => {
    axios.put(`/api/fruits/${id}`, user)
      .then(response => {
        console.log(response.data);
        setSuccessMessage('User updated successfully.');
        setErrorMessage(null);
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('Failed to update user.');
        setSuccessMessage(null);
      });
  };

  const userDelete = () => {
    axios.delete(`/api/fruits/${id}`)
      .then(response => {
        console.log(response.status);
        setSuccessMessage('User deleted successfully.');
        setErrorMessage(null);
        // Remove the deleted user from the state
        setUsers(oldUsers => oldUsers.filter(u => u.id !== id));
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('Failed to delete user.');
        setSuccessMessage(null);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(oldUser => ({
      ...oldUser,
      [name]: value
    }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '130vh' }}>
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: '600px' }}>
    <div>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>EDIT CUSTOMER DETAILS</h1>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      
      <Form>
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" name="firstName" value={user.firstName} required 
            onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control type="text" name="lastName" value={user.lastName} required 
            onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control type="text" name="address" value={user.address}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender:</Form.Label>
          <Form.Control as="select" name="gender" value={user.gender}
            onChange={handleChange}>
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="tel" name="phoneNumber" value={user.phoneNumber} required 
            onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control type="date" name="dateOfBirth" value={user.dateOfBirth} 
            onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>NIC:</Form.Label>
          <Form.Control type="text" name="nic" value={user.nic} 
            onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" name="description" value={user.description} 
            onChange={handleChange} />
        </Form.Group>
        {userData.user ?(
          <>
          <Button variant="primary" onClick={userUpdate}>Update</Button>{' '}
          <Button variant="danger" onClick={userDelete}>Delete</Button>
          </>
        ) : (
          <p>You need to log in to edit or delete!</p>

        )}

        
      </Form>
     
      
    </div>
    
    </div>
    <div style={{ flex: '1', paddingLeft: '20px', height: '83%' }}>
  {/* Add your image source and styling here */}
  <img
    src="https://img.freepik.com/free-vector/medical-office-web-concept-buyer-standing-pharmacy-medicines-shelves-pharmacist-consults-patient-doctor-prescription_198565-291.jpg?w=360"
    alt="Side Image"
    style={{ width: '100%', height: '100%', borderRadius: '10px' }}
  />
</div>
    
    </div>
    
  );
};

export default EditCustomer 

