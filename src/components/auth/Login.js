import React, { useState, useContext } from 'react';
import { UserContext } from '../../App';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [user, setUser] = useState({
    name: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: user.name,
      password: user.password,
    };

    try {
      const loginResponse = await axios.post(
        'http://localhost:3000/api/users/login',
        newUser
      );

      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem('auth-token', loginResponse.data.token);

      setUser({
        name: '',
        password: '',
      });

      window.location = '/customerlist';
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((oldUser) => ({
      ...oldUser,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '89vh',
        width:'185vh',
        backgroundImage: `url('https://img.freepik.com/premium-photo/top-view-assortment-drug-medicine-with-copy-space_23-2148430083.jpg?w=740')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          width: '400px',
        }}
      >
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>𝙇𝙤𝙜𝙞𝙣</h1>
        {errorMessage && (
          <div
            style={{
              color: 'red',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            {errorMessage}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label style={{ fontWeight: 'bold' }}>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={user.name}
              required
              onChange={handleChange}
              style={{ height: '40px' }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: 'bold' }}>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              required
              onChange={handleChange}
              style={{ height: '40px' }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              height: '40px',
              fontSize: '16px',
              width: '100%',
              marginTop: '20px',
              backgroundColor: '#007bff',
              borderColor: '#007bff',
            }}
          >
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
