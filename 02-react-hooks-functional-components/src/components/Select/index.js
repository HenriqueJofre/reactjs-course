import { useState } from "react";

function Select(){
    const [currentProduct, setCurrentProduct] = useState("");

    return (
        <>
            <h1>Select product</h1>
            <p>My current product is: {currentProduct}</p>
            <select name="Products" onChange={(e) => setCurrentProduct(e.target.value)}>
                <option>Choice your product</option>
                <option value="MacOS">MacOs</option>
                <option value="Windows 11">Windows 11</option>
                <option value="Iphone 13">Iphone 13</option>
            </select>
        </>        
    );
}

export default Select;