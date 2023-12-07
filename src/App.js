import { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios'

import Header from './components/Header';
import Welcome from './components/Welcome';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import About from './Home/About';
import Dashboard from './Home/Dashboard';
import Contact from './Home/Contact';
import Services from './Home/Services';

export const UserContext = createContext();

function App() {
 const [userData, setUserData] = useState({
  token: undefined,
  user: undefined,
 })

 useEffect(() => {
  const isLoggedIn = async () => {
    let token = localStorage.getItem("auth-token")
    if (token == null){
      localStorage.setItem("auth-token", "")
      token = ""
    }

    const tokenResponse = await axios.post(
      '/api/users/tokenIsValid', 
      null, 
      {headers: {"auth-token": token}}
    )

    console.log(tokenResponse.data)
    if(tokenResponse.data){
      const userResponse = await axios.get('/api/users/profile',
        {headers: {'auth-token': token}}
      )
      setUserData({
        token: token,
        user: userResponse.data
      })
    }
  }
  isLoggedIn()
}, [])

  return (
    <UserContext.Provider value={{userData, setUserData}}>
    <Router>
      <Header />
      <Container>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/customerlist' element={<CustomerList />} />
            <Route path='/addcustomer' element={<AddCustomer />} />
            <Route path='/api/fruits/edit/:id' element={<EditCustomer />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/home/about' element={<About />} />
            <Route path='/home/dashboard' element={<Dashboard />} />
            <Route path='/home/contact' element={<Contact />} />
            <Route path='/home/services' element={<Services />} />
          </Routes>
      </Container>
    </Router>
    </UserContext.Provider>
  );
}

export default App; 
