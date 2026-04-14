import './App.css'
// import Header, {Card1, Card2 } from '../Header.jsx'
// import reactLogo from './assets/react.svg'

// import data from './data.json'

// function App(){
//    console.log(data)
// return (
//   <>
//     <Header/>
//     <Card1/>
//     <Card2/>
//     {/* <img src="./src/assets/hero.png"/> */}
//     <img src={reactLogo} />
   
//     </>
//   )
// }

// export default App


// function App(){
//   return

//   // let arr = ["spiderman", "spiderman", "doreman", "blackman"]
// //   <div>

// //     {arr.map(function (element, index){
// //       return <h1 key ={index}>{element}</h1>
// //     })}

// // </div>
// //  )
// // }

// // {React.createElement('h1',"hello how are you")}

// }
// import React from 'react'

// function App  (){
//   return (
// <div>
//     {/* <h1 className='heading'>How are you</h1> */}

// {React.createElement( 'h1', {className : 'heading'} , style :{
//   backgroundColor : "red",
//   }}', 'How are you')}

//     </div>
//   )
// }


import React from 'react'

function App (){
  // let n = "Vanshika Kathpal"

  let alpha = "Vanshika";
  let age = 22;
  return (
    <div>

    {/* //const element = <h1>Hello, Muskan!</h1>   */}
{/* {React.createElement('h1', null, 'Hello, Muskan!')} */}
{/* 


const element = < h1 className = "heading">Hello, Vanshika </h1>
{React.createElement('h1', {className : 'heading'},'Hello, Vanshika')} */}


{/* const element = <a href="https://www.school4you.in" className = "link"> School4u </a> */}
  
  {/* {React.createElement('a', {href : "https://www.school4you.in", className : 'link'}, "youtube.com")} */}


{/* const element = <h1 className = "heading"> Hello, {namre}</h1> */}


{/* {React.createElement('h1', {className : "heading"}, `HELLO, ${n}`)} */}

{/* const element = <div> Hello, {alpha}, you are {age} years old </div> */}

{React.createElement('div', null, `Hello ${alpha}, you are ${age} years old`)}

    </div>
  )

}


export default App



