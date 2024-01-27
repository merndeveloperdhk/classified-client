import { useLoaderData } from "react-router-dom";
import Container from "../Shared/Container";
import Products from "../Products/Products";
import { Helmet } from "react-helmet";


const AllProducts = () => {
    const products = useLoaderData();
    return (
        <Container>
            <div>
            <Helmet>
                <title>All Products | future ecommerce website</title>
            </Helmet>

            <div className="grid grid-cols-4 gap-3">
                {
                    products.map(product => <Products
                    key={product._id}
                    product={product}
                    ></Products>)
                }
            </div>
        </div>
        </Container>
        
    );
};

export default AllProducts;