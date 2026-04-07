function Header() {
    return (
        <h1>
            I am learning react 
            </h1>
    )
}

 function Card1(){
    return(
        <h2>
            Today's topic is Imports & Exports
        </h2>
    )
}

function Card2(){
    return(
        <h3>
            After this I'll learn JSX
        </h3>
    )
}



export default Header;

export {Card1,
Card2
}
