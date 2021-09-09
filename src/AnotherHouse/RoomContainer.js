import React, {useEffect, useState} from 'react'
import Room from './Room'

const RoomContainer = ({pillar}) => {
    const [rooms, setRooms] = useState([])

    const showRooms = () => {
        let roomAmount = Math.floor(pillar / 4)
        let newArray = new Array(roomAmount)
        newArray.fill(roomAmount)
        setRooms(newArray)
    }
    useEffect(()=>{
        showRooms()
    }, [pillar])
    return (
        <div>
            {rooms.map((room, index) =><Room key = {index}/>)}
        </div>
    )
}

export default RoomContainer
