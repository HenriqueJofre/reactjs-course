import { useState } from "react";

function Input(){
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <p>This value is: {inputValue}</p>
            <input name="name" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    );
}

export default Input;