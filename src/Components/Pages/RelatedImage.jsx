import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../Shared/Loader";
import Heading from "../Shared/Heading";
import axios from "axios";

const RelatedImage = () => {
    const [rooms, setRooms] = useState([]);
    const [params] = useSearchParams();
    const category = params.get("category");
    const [loading, setLoading] = useState(false);

    // for randomly show
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    useEffect(() => {
        setLoading(true);
        axios.get("/rooms")
          .then((res) => {
            const shuffledData = shuffleArray(res.data);
            if (category) {
              const filtered =shuffledData.filter((room) => room.category !== category) ;
              setRooms(filtered);
            } else {
              setRooms(res.data);
            }
            setLoading(false);
          });
      }, [category]); 

      if (loading) {
        return <Loader></Loader>;
      }

    return (
        <div>
             <div className="col-span-10">
             <h1 className="text-xl font-semibold">Related Image</h1>
             <div className="divider my-1 w-1/2"></div>
              
            {
              rooms && rooms.length > 0 ? (
                  
                <div className="grid grid-cols-1  md:grid-cols-2 md:gap-2 ">
                  {rooms.slice(0,6).map((room) => (
                    <div key={room._id}  className=" w-full overflow-hidden rounded-lg  group h-[160px] relative">
                         <Link to={`/room/${room._id}`}  
                        >
                          <img className=" rounded-lg object-cover group-hover:scale-110 duration-500 h-40 w-full " src={room.image} alt="product image" />
                        </Link>
                    <h1>{room.title}</h1>
                  </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[calc(100vh-250px)]">
                  <Heading
                    center={true}
                    title="No Products available in this category"
                    subtitle="Please select other categories"
                  ></Heading>
                </div>
              )
            }
          </div>
        </div>
    );
};

export default RelatedImage;