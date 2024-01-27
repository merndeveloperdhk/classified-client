import { useLoaderData } from "react-router-dom";
import Container from "../Shared/Container";


const MensWears = () => {
    const mens = useLoaderData();
    return (
        <Container className="">
           <div className="grid grid-cols-4 gap-3 mt-4 ">
           {
                mens.map(men =>(
                    <div key={men._id} className="border bg-yellow-100 p-2">
                        <h1>{men.name}</h1>
                    <h1>{men.category}</h1>
                    </div>
                ))
            }
           </div>
           
        </Container>
    );
};

export default MensWears;