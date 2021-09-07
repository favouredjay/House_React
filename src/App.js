import logo from './logo.svg';
import './Components/House/App.css';
import Roof from './Components/House/Roof'
import Room from './Components/House/Room';
import './Components/House/Room.css';
import Decking from './Components/House/Decking'
import Floor from './Components/House/Floor'
import Foundation from './Components/House/Foundation'

function App() {
  return (
   <div> 
     <div className="App">
      <Roof/>
     <Room/>
     <Decking/>
     <Room/>
     <Floor/>
     <Foundation/>
     </div>
   </div> 
  );
}

export default App;
