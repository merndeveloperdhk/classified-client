import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../Shared/Loader";
import Heading from "../Shared/Heading";
import axios from "axios";


const RelatedProducts = () => {
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
              <h1 className="text-center text-xl font-bold">Related Products</h1>
              <div className="divider w-1/3 mx-auto my-1"></div>
              
            {
              rooms && rooms.length > 0 ? (
                  
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-2 ">
                  {rooms.slice(0,4).map((room) => (
                    <Link  to={`/room/${room._id}`} key={room._id}  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-2 group h-[400px] relative">
                    <div className="overflow-hidden w-full">
                      <img className=" rounded-t-lg object-cover group-hover:scale-110 duration-500 h-48 w-full " src={room.image} alt="product image" />
                    </div>
                    <div className="px-1 pb-3">
                    
                        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                          {room.title}
                        </h5>
                      <div className="flex items-center justify-between my-2">
                        <h5 className="text-base tracking-tight text-gray-900 dark:text-white">
                          {room.location}
                        </h5>
                        <h5 className="text-base tracking-tight text-gray-900 dark:text-white">
                          {room.division}
                        </h5>
                      </div>
            
                     <div className="flex justify-between items-center">
                     <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                          5.0
                        </span>
                      </div>
                      <h1 className="text-base">{room.category}</h1>
                     </div>
                      <div className="flex items-center justify-between w-full absolute bottom-2 px-2">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          $ {room.price}/night
                        </span>
                        <button 
                          
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-block"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </Link>
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

export default RelatedProducts;