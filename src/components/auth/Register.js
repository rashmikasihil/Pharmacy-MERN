import React, { useState, useContext } from 'react';
import { UserContext } from '../../App';
import axios from 'axios';
import { Button, Form, Alert } from 'react-bootstrap';

const Register = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [user, setUser] = useState({
    name: '',
    password: '',
    passwordAgain: '',
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: user.name,
      password: user.password,
      passwordAgain: user.passwordAgain,
    };

    if (user.password !== user.passwordAgain) {
      setError('Passwords do not match');
    } else {
      try {
        const registerResponse = await axios.post('/api/users/register', newUser);
        const loginResponse = await axios.post('http://localhost:3000/api/users/login', newUser);

        setUserData({
          token: loginResponse.data.token,
          user: loginResponse.data.user,
        });
        localStorage.setItem('auth-token', loginResponse.data.token);

        setUser({
          name: '',
          password: '',
          passwordAgain: '',
        });

        setError(null);

        window.location = '/customerlist'; // move this after the error handling
      } catch (err) {
        console.error(err);
        setError('Something went wrong. Please try again later.');
      }
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
        height: '85vh',
        width:'185vh',
        background: 'url(https://img.freepik.com/premium-photo/top-view-assortment-drug-medicine-with-copy-space_23-2148430083.jpg?w=740) center/cover no-repeat', // Add your background image path here
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
            <center>
              <h1>𝙍𝙚𝙜𝙞𝙨𝙩𝙚𝙧</h1>
            </center>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" value={user.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" name="password" value={user.password} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password Again:</Form.Label>
              <Form.Control
                type="password"
                name="passwordAgain"
                value={user.passwordAgain}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}

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
              Register User
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;

