import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { useSearchParams } from "react-router-dom";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    console.log("from Rooms:", category);
    useEffect(()=> {
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => {
            if(category){
                const filtered = data.filter(room => room.category === category);
                setRooms(filtered)
            }else{
                setRooms(data)
            }
        })
    },[category])
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-2 pt-12">
                {
                    rooms.map(room => <RoomCard
                    key={room._id}
                    room={room}
                    ></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;