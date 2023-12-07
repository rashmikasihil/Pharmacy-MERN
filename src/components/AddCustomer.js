import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../App';
import { Button, Form, Alert } from 'react-bootstrap';

const AddCustomer = () => {

  const { userData, setUserData} = useContext(UserContext);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    nic: '',
    description: '',
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    
    axios
      .post('http://localhost:3000/api/fruits',personalInfo)
      .then((res) => {
        console.log(res.data);
        setSuccessMessage('Personal information has been successfully added!');
        setPersonalInfo({
          firstName: '',
          lastName: '',
          address: '',
          gender: '',
          phoneNumber: '',
          dateOfBirth: '',
          nic: '',
          description: '',
        });
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('An error occurred. Please try again.');
        setSuccessMessage(null);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));

    
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^0[0-9]{9}$/;
    return re.test(phoneNumber);
  };

  const validateNIC = (nic) => {
    const re = /^[0-9]{9}[Vv]$/;
    return re.test(nic);
  };

  const validateForm = () => {
    let isValid = true;

    if (personalInfo.firstName.trim() === '') {
      isValid = false;
      setErrorMessage('Please enter your first name.');
      return isValid;
    }

    if (personalInfo.lastName.trim() === '') {
      isValid = false;
      setErrorMessage('Please enter your last name.');
      return isValid;
    }

    if (personalInfo.address.trim() === '') {
      isValid = false;
      setErrorMessage('Please enter your address.');
      return isValid;
    }

    if (personalInfo.gender === '') {
      isValid = false;
      setErrorMessage('Please select your gender.');
      return isValid;
    }

    if (!validatePhoneNumber(personalInfo.phoneNumber)) {
      isValid = false;
      setErrorMessage('Please enter a valid phone number.');
      return isValid;
    }

    if (personalInfo.dateOfBirth === '') {
      isValid = false;
      setErrorMessage('Please enter your date of birth.');
      return isValid;
    }

    if (!validateNIC(personalInfo.nic)) {
      isValid = false;
      setErrorMessage('Please enter a valid NIC number.');
      return isValid;
    }

    if (personalInfo.description.trim() === '') {
      isValid = false;
      setErrorMessage('Please enter a description.');
      return isValid;
    }

    setErrorMessage(null);
    return isValid;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '160vh' }}>
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: '600px' }}>
    <div>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>𝘼𝘿𝘿 𝘾𝙐𝙎𝙏𝙊𝙈𝙀𝙍</h1>
      {successMessage && (
        <Alert variant="success">{successMessage}</Alert>
      )}
      {errorMessage && (
        <Alert variant="danger">{errorMessage}</Alert>
      )}
     
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
       <Form.Control
        type="text"
        placeholder="Enter your first name"
        name="firstName"
        value={personalInfo.firstName}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your last name"
        name="lastName"
        value={personalInfo.lastName}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your address"
        name="address"
        value={personalInfo.address}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicGender">
      <Form.Label>Gender</Form.Label>
      <Form.Select
        name="gender"
        value={personalInfo.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your phone number"
        name="phoneNumber"
        value={personalInfo.phoneNumber}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control
        type="date"
        placeholder="Enter your date of birth"
        name="dateOfBirth"
        value={personalInfo.dateOfBirth}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicNIC">
      <Form.Label>NIC Number</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your NIC number"
        name="nic"
        value={personalInfo.nic}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        placeholder="Enter a description"
        name="description"
        value={personalInfo.description}
        onChange={handleChange}
      />
    </Form.Group>
    { userData.user ?(
      <Button variant="primary" type="submit" style={{ height: '40px', fontSize: '16px', width: '100%', marginTop: '20px', backgroundColor: '#007bff', borderColor: '#007bff' }}>
      Add Customer
    </Button>

    ) : (
      <p>You need to be logged in to Add Customer!</p>

    )}
    
  </Form>
  
  
</div>
</div><div style={{ flex: '1', paddingLeft: '20px', height: '83%' }}>
  {/* Add your image source and styling here */}
  <img
    src="https://static.vecteezy.com/system/resources/thumbnails/006/916/080/small_2x/pharmacist-at-counter-in-pharmacy-vector.jpg"
    alt="Side Image"
    style={{ width: '100%', height: '100%', borderRadius: '10px' }}
  />
</div>
</div>



  )
}

export default AddCustomer
