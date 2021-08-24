import React from 'react';
import './signUp.css';
// import { Button } from 'react-bootstrap';
function SignUp(){
    // console.log("jbhvfc");
    return(
       
        <div  id="bgsign" className="container">
             <h1 class="signup">Sign Up</h1>
            <input id="details" 
            name='username'
            placeholder='Username'/>
            <br/>

        <input id="details"
            name='email'
            placeholder='Email'/>
            <br/>

        <input id="details"
            name='number'
            placeholder='Contact Number'/>
            <br/>
        
        <input id="details"
            name='password'
            placeholder='Password'/>
            <br/>
        <button id="btn" type="button" onClick="">Submit</button>
        {/* <Button variant="success" size="lg">
      Submit
    </Button>{' '} */}
        </div>
        
    )
}
export default SignUp;