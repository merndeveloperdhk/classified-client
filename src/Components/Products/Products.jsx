

const Products = ({product}) => {
    
   
    return (
        <div className="border p-2 bg-yellow-100">
            <h1 className="font-bold">{product.category}</h1>
            <h1>{product.name}</h1>
        </div>
    );
};

export default Products;