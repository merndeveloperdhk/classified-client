import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Link, useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params] = useSearchParams();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const category = params.get("category");
  console.log("from Rooms:", category);

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
          const filtered = shuffledData.filter((room) => room.category === category);
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
    <div className="text-center md:text-right">
      <div className="w-full flex justify-end text-xl p-2 ">
        <button onClick={() => setShow(!show)}>
          {show ? (
            <BsGrid3X3GapFill />
          ) : (
            <>
              <FaListUl />
            </>
          )}
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 ">
          <div className=" md:col-span-2 bg-slate-100  list-none text-center  ">
            <div className="md:col-span-2 bg-slate-100 pt-4 list-none text-center">
              <h1 className="text-xl font-bold">Division</h1>
              <div className="flex flex-row flex-wrap gap-2 md:flex-col">
                <Link>
                  <li>Dhaka</li>
                </Link>
                <Link>
                  <li>Chittagonj</li>
                </Link>
                <Link>
                  <li>Sylhet</li>
                </Link>
                <Link>
                  <li>Khulna</li>
                </Link>
                <Link>
                  <li>Barishal</li>
                </Link>
                <Link>
                  <li>Rajshahi</li>
                </Link>
                <Link>
                  <li>Comilla</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-10">
            {
              rooms && rooms.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-2 ">
                  {rooms.map((room) => (
                    <RoomCard key={room._id} room={room}></RoomCard>
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
      </div>
      {/* Pagination start*/}
      <nav
        aria-label="Pagination"
        className="inline-flex text-center   -space-x-px rounded-md shadow-sm  dark:bg-gray-800 dark:text-gray-100 mt-4  "
      >
        <button 
          type="button"
          className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700 "
        >
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          aria-current="page"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-400 dark:text-gray-900 dark:border-gray-700"
        >
          1
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
        >
          2
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
        >
          3
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
        >
          ...
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
        >
          7
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
        >
          8
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
        >
          9
        </button>
        <button
          type="button"
          className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700"
        >
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </nav>
      {/* Pagination end */}
    </div>
  );
};

export default Rooms;
