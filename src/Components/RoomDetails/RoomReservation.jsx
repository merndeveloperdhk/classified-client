/* eslint-disable react/prop-types */

import { formatDistance } from "date-fns";
import Button from "./Button";
import Calender from "./Calender";
import { useState } from "react";


const RoomReservation = ({room}) => {
console.log(room);
  // price calculation
  // Total days * price

  /* const totalDays = formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
  console.log(totalDays); */

  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: 'selection',
  })

  const handleSelect = () => {
    setValue({ ...value })
  };

    return (
        <div>
             <div>
                <h1 className="p-3">
                  <span className="font-extrabold text-xl">${room?.price}</span>{" "}
                  / Night
                </h1>
                <hr />
                <div className="md:px-2 text-center ">
                  <Calender handleSelect={handleSelect} value={value}></Calender>
                </div>
                <hr className="border-1 border-black" />
              </div>
              <div className="p-3">
                <Button label={"Reservation"}></Button>
              </div>
              <hr />
              <div className=" p-3 flex items-center justify-between font-semibold text-lg">
                    <div>
                        Total
                    </div>
                    <div>
                        <h1>${room.price}</h1>
                    </div>
              </div>
        </div>
    );
};

export default RoomReservation;