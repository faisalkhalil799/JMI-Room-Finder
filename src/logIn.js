import React from 'react';
import './logIn.css';
function LogIn(){
    return(
        // <h1>hii</h1>
        <div id="bglog" className="container">
             <h1 class="loghead">Log In</h1>
            <input id="logdet" 
               name='username'
               placeholder='Username'/>
            <br/>
            <input id="logdet"
               name='password'
               placeholder='Password'/>
            <br/>
        <button id="btn" type="button" onClick="">Submit</button>
            </div>
    )
}
export default LogIn;