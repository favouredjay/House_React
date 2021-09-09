import React from 'react'
import Foundation from './Foundation'
import RoomContainer from './RoomContainer'
import Roof from './Roof'


const House = ({pillar}) => {
    return (
        <div>
           {pillar >= 4 && <Roof/>}
           {pillar ? ((pillar >=4 || pillar % 4 === 0) && <RoomContainer pillar = {pillar}/>): 'No Room'} 
           <Foundation/>
        </div>
    )
}

export default House
