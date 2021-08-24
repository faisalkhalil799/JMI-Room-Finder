import React from 'react';
import './listRoom.css';
function Location(){
    return (
  
      <>
      <select>
        <option value="zakir">Zakir Nagar</option>
        <option value="zakir">Batla House</option>
        <option value="zakir">Hari Masjid</option>
        <option value="zakir">Shaheen Bagh</option>
        <option value="zakir">Jauhri Farm</option>
      </select>
      </>
    );
  }

function ListRoom(){
    
    return(
        
        <div id="bglist" className="container">
            
            
             <h1 class="freelist">Rent your property for free</h1>
             
            <input id="details" 
            name='name'
            placeholder='Name'/>
            <br/>
            
        <input id="details"
            name='email'
            placeholder='Email'/>
            <br/>
            

        <input id="details"
            name='number'
            placeholder='Contact Number'/>
            <br/>
            <p style={{textAlign:"left"}}> Select City<Location/></p>
        
        
            <br/>
        <button id="btn" type="button" onClick={verifynum}>Verify your Contact Number</button>
        </div>

    );
}
function verifynum(){
    return(
alert("An otp has been sent to your Number")
    );
}
export default ListRoom;