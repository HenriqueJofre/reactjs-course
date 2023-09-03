import { useState, useEffect } from "react";
import axios from "axios";

function Products(){
    const [products, setProducts] = useState([]);
    const [url, setURL] = useState("https://dummyjson.com/products?limit=10&select=title,price");

    const getProducts = (URL) => {
        axios.get(URL).then((resProducts) => {
            setProducts(resProducts.data.products);
            console.log(resProducts.data.products);
        });
    }

    useEffect(() => {
        getProducts(url);
        console.log("Executed!");
    }, [url]);

    return (
        <>
            <h1>List of Products</h1>
            {products.map((product) => <p>Name: {product.title} / Price: ${product.price}</p>)}
        </>
    );
}

export default Products;