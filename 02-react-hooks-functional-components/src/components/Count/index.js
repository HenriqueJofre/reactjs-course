import { useState, useCallback } from "react";

function Count(){
    const [count, setCount] = useState(0);

    const IncrementValue = useCallback(() => {
        setCount(count + 1);
        console.log("One more increased!");
    }, [count]);

    const DecrementValue = useCallback(() => {
        setCount(count - 1);
        console.log("One more decreased!");
    }, [count]);

    return (
        <>
            <h1>useCallback</h1>
            <p>Count: {count}</p>
            <button onClick={IncrementValue}>Increment++</button>
            <button onClick={DecrementValue}>Decrement++</button>
        </>
    );
}

export default Count;