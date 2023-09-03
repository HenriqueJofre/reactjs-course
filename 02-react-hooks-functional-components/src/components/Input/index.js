import { useState } from "react";

function Input(){
    const [currentValue, setCurrentValue] = useState("");

    return (
        <>
            <h1>Input Component</h1>
            <p>My current value is: {currentValue}</p>
            <input name="currentValue" type="text" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
        </>
    );
}

export default Input;