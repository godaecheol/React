const OddEvenResult = ({count})=>{
    //props.count 와 같은거임 props 객체를 받아와 count 에접근
    //props 를 사용하는곳도 같이 랜더링이 되는듯?
    //그것도 맞고 부모 컴포넌트가 리랜더하면 자식도 리랜더됨
    console.log(count);
    return <>{count % 2 ===0 ? '짝수':'홀수'}</>
}



export default OddEvenResult;