import React,{ useState,useEffect } from "react";

const CounterA = React.memo(({count})=>{
    useEffect(()=>{
        console.log(`CounterA :: Update ${count}`);
    });

    return <div>{count}</div>
});

const CounterB = ({obj})=>{
    useEffect(()=>{
        console.log(`CounterB :: Update ${obj.count}`);
    });
    return <div>{obj.count}</div>
};

const areEqual = (prevProps, nextProps)=>{
    if(prevProps.obj.count === nextProps.obj.count){
        return true;
    }
    return false;
};

const MemoizedCounterB = React.memo(CounterB,areEqual);


const OptimizeTest = ()=>{

    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({                                                                                                      
        count:1
    });


    return <div style={{padding:50}}>
        <div>
            <h2>Count A</h2>
            <CounterA count={count}/>
            <button onClick={()=>setCount(count)}>A button</button>
        </div>
        <div>
            <h2>Count B</h2>
            <MemoizedCounterB obj={obj}/>
            <button onClick={()=>setObj({
                count: obj.count
            })}>B button</button>
        </div>
    </div>
};

export default OptimizeTest;