import { Helmet } from "react-helmet";
import Catories from "./Categories/Catories";
import Rooms from "./Rooms/Rooms";
import Container from "./Shared/Container";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Future e-commerce</title>
      </Helmet>
      <Catories></Catories>
      {/* Room section TODO */}
      <Container>
        <div >
          {/* Left menu */}
         {/*  <div className="md:col-span-2 bg-slate-100 pt-4 list-none text-center ">
            <h1 className="text-xl font-bold">Division</h1>
            <div className="">
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
          </div> */}
          {/* Product section */}
          <div >
            <Rooms></Rooms>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
