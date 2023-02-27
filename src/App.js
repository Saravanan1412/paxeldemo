import React from 'react';
// import  {Header}  from './components/header';
import Register from './components/register';
import Login from './components/login';
import Forgot from './components/forgotpassword';
import Landing from './components/landingpage';
import { Subscription } from './components/subscription';
import { Profile } from './components/profile';
import { Address } from './components/address';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  
  return (
        <>
        {/* <Header/> */}
        <BrowserRouter>
        
          <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/ForgotPassword" element={<Forgot/>}/>
                <Route path="/DashBoard" element={<Landing/>}/>
                <Route path="/Subscription" element={<Subscription/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Address" element={<Address/>}/>
          </Routes>
        </BrowserRouter></>
  );
}
export default App;
