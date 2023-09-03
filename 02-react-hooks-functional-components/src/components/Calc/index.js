import { useState, useMemo } from "react";

function Calc({ data }){
    const [result, setResult] = useState(0);

    const expensiveResult = useMemo(() => {
        console.log("Calculating expensive result...");
        const formattedData = data.map(resData => setResult(resData.value * 2));
        return formattedData;
    }, [data]);

    return (
        <div>
            <h1>useMemo</h1>
            <p>Expensive result is: {result}</p>
            {expensiveResult.map((item) => <p>{item}</p>)}
        </div>
    );

}

export default Calc;