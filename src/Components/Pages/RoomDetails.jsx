import { Helmet } from "react-helmet";
import Container from "../Shared/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Shared/Loader";
import Header from "../RoomDetails/Header";
import RoomInfo from "../RoomDetails/RoomInfo";
import RoomReservation from "../RoomDetails/RoomReservation";
import RelatedProducts from "../Rooms/RelatedProducts";
import axios from "axios";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("/rooms")
      .then((res) => {
        const data = res.data
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <Helmet>
        <title>{room.title}</title>
      </Helmet>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mt-8">
          <div className="bg-green-100 col-span-2 md:mt-12">
            <h1>left side</h1>
          </div>
          {/* middle side */}
          <div className="col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              {/* middle side */}
              <div className="max-w-screen-lg mx-auto col-span-8">
                <div className="flex flex-col  gap-4">
                  <Header room={room}></Header>
                </div>

                <div className=" mt-4 grid grid-cols-1  md:gap-2 md:mt-4">
                  <div className="md:col-span-4 mt-4 md:mt-0">
                    <RoomInfo room={room}></RoomInfo>
                  </div>
                  <div className="md:col-span-3 w-full  mx-auto md:mt-0 order-first md:order-last border ">
                    <RoomReservation room={room}></RoomReservation>
                  </div>
                </div>
              </div>
              {/* Right side */}
              <div className="col-span-4 bg-sky-100 md:mt-12">
                <h1>right</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Related Product bottom */}
        <div className=" mt-2 md:mt-4 ">
          <h1 className="text-3xl font-bold text-center">
            <RelatedProducts></RelatedProducts>
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default RoomDetails;
