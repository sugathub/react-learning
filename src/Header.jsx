function Header(){
 let num=0;
    const count=()=>{
       console.log(num);
        return  num++;
    }

    return(
        <>
        <button onClick={count}>Please click{num}</button>
        <h1>This is header component</h1>
        </>
    )
}
export default Header;