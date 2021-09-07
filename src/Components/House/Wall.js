import React, {useState} from 'react'
import Window from './Window'
import Door from './Door' 
import Pillar from './Pillar'

const Wall = (props) => {
    const [isPlastered, setPlastered] = useState(false);
    const [color, setColor] = useState("");

    const plaster = () => {
        setPlastered (true)
        setColor(props.backgroundColor)
    }
    const colorUpdate = (color) => 
    isPlastered ? setColor(color) : null;
    return (
        <div className = "wall">
            <div style = {{backgroundColor: color}}>
                <button onClick={plaster}>PlasterWall</button>
                <button onClick={()=>colorUpdate("red")}>Color</button>
            </div>
           <div className = "window"> <Pillar/></div>
           <div className = " window"> <Window/>
           
           </div> 
          <div className = "window"> <Door/></div> 

<div className = "window"> <Pillar/></div>

        </div>
    )
}

export default Wall
