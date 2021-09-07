import React, {useState} from 'react'
import HousePillar from './HousePillar'
import Wall from './Wall'
import Window from "./Window"
import Door from './Door'
import Pillar from "./Pillar"
const Room = () => {
    const [isLighting, setLighting] = useState(false);
    const lightsOn = ()=> setLighting(!isLighting)
    return (
       <div className = "parent1">
           <div style = {isLighting ? {backgroundColor:"black"} : {backgroundColor: "blue"}}></div>
          <label>
              <input type="checkbox" onClick={lightsOn}/>
              Lights!
          </label>

     <Wall></Wall>
   
      
    
      
      
        </div>
    )
}

export default Room
