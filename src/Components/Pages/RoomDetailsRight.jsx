import { useState } from "react";
import RelatedImage from "./RelatedImage";

const RoomDetailsRight = ({ room }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-2 ">
     
        <h1 className="my-3" >Name: <span className=" font-semibold">{room?.host?.name}</span> </h1>
      <div className="flex items-center gap-2 text-center  md:mb-14">
        <h1 className="text-xl font-semibold">Call: </h1>
        <button
          className="text-black font-bold w-auto  px-1 py-1 rounded-md"
          onClick={() => setShow(!show)}
        >
          {show ? room?.number ? room?.number: " No Number" : "01XXXXXXXXX"}
        </button>
      </div>
      <div>
        {/* Related Images */}
        <RelatedImage></RelatedImage>
      </div>
    </div>
  );
};

export default RoomDetailsRight;
