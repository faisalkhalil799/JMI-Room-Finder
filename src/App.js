import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer.js';
import SignUp from './signUp.js';
import LogIn from './logIn.js';
import SecondPart from './secondPart.js';
import ListRoom from './listRoom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
function App(){
  return(
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Home" exact component={Home}/>
      <Route path="/LogIn" component={LogIn}/>
      {/* <Route path="/" exact component={Home}/> */}
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/ListRoom" component={ListRoom}/>
      
      </Switch>
      <SecondPart />
      <Footer />
      </div>
      </Router>
      
  );
}
// functions
// function Location(){
//   return (

//     <>
//     <select>
//       <option value="zakir">Zakir Nagar</option>
//       <option value="zakir">Batla House</option>
//       <option value="zakir">Hari Masjid</option>
//       <option value="zakir">Shaheen Bagh</option>
//       <option value="zakir">Jauhri Farm</option>
//     </select>
//     </>
//   );
// }
// function GetGender(){
//     return (
//       <>
//       <input type="radio" value="male" name="radio"></input>Male
//      <input type="radio" value="female" name="radio"></input>Female
//     </>
//      );
//    }

// function Flattype(){
//   return (

//     <>
//     <select>
//       <option value="zakir">1 Room</option>
//       <option value="zakir">1 BHK</option>
//       <option value="zakir">2 BHK</option>
//       <option value="zakir">3 BHK</option>
//     </select>
//     </>
//   );
// }

// function Parking(){
//   return (
//     <>
//     <select>
//       <option value="zakir">2 Wheeler</option>
//       <option value="zakir">4 Wheeler</option>
//     </select>
//     </>
//   );
// }

// function People(){
//   return (

//     <>
//     <input type="number"></input>
//     </>
//   );
// }

// function Budget(){
//   return (
//     <>
//       <select>
//       <option value="zakir">2000-6000</option>
//       <option value="zakir">6000-10,000</option>
//       <option value="zakir">10,000-15000</option>
//     </select>
//     </>
//   );
// }
// const Home = () => (
//   <div>
//         <h1 className="h1">
//         World's Largest NoBrokerage Room Finder Site
//         </h1>
        
//       <div id="bghome" className="container">
        
    

//       <p style={{textAlign:"left"}}> Your Location<Location/></p>
    
//       <p style={{textAlign:"left"}}> Select Gender <GetGender/></p>
 
//       <p style={{textAlign:"left"}}> Apartment Type <Flattype/></p>
    
//       <p style={{textAlign:"left"}}> Parking:- <Parking/></p>
      
//       <p style={{textAlign:"left"}}>  Number of People:- <People /></p>
    
//       <p style={{textAlign:"left"}}>  Budget:- <Budget/>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button>Search</button></p>
 
//        </div>
//        </div>
//     );


export default App;