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
        <Rooms></Rooms>
      </Container>
    </div>
  );
};

export default Home;
