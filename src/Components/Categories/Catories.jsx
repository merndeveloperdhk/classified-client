import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Catories = () => {
    const[params] = useSearchParams();
  const category = params.get('category');
  console.log(category);
    return (
        <div>
            <Container>
                
                <div className="pt-4 flex justify-around items-center overflow-x-auto">
                    {
                        categories.map(item => <CategoryBox key={item.label}
                           
                            label={item.label}
                            icon={item.icon}
                            selected={category=== item.label}
                        ></CategoryBox>)
                    }
                </div>
                
            </Container>
        </div>
    );
};

export default Catories;