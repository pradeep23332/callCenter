import React from 'react';
import "../login.css";


 function LogOut() {
  return (
    <>
     <h1 className='logout'> </h1>
     <center></center>
     
     <div class="cont">
    <div class="form sign-in">
    <h2> Login </h2>
      <label>
      
        <span>Email Address</span>
        <input type="email" name="email"/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password"/>
      </label>
      <button class="submit" type="button">Sign In</button>
     

      
    </div>
    </div>

    <div class="sub-cont">
      <div class="img">
        </div>
    
    </div>
     
     
    

    </>
  ) ;
}
export default LogOut;