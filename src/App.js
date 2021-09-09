import {useState} from 'react'
import './Components/House/App.css';
import Roof from './Components/House/Roof'
import Room from './Components/House/Room';
import './Components/House/Room.css';
import Decking from './Components/House/Decking'
import Floor from './Components/House/Floor'
import Foundation from './Components/House/Foundation'
import axios from 'axios'

function App() {
  axios.get('http://localhost:5000/pillar')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  })
  const [balance, setBalance] = useState(1000000)
  const [loading, setLoading] = useState(false)
  const moneyForHousing = () =>setBalance(balance + 2000000)
  const loadPage = () => setLoading (!loading)
  
  return (
   <div> 
     <div className="App" >
       <h1>
         Loading...
       </h1>
       {loadPage ? <div>
      <Roof/>
     <Room/>
     <Decking/>
     <Room/>
     <Floor/>
     <Foundation/>
     </div> : loading   }
     </div>
   </div> 
  );
}

export default App;
