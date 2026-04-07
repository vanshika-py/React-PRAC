import './App.css'
import Header, {Card1, Card2 } from '../Header.jsx'
import reactLogo from './assets/react.svg'

import data from './data.json'

function App(){
   console.log(data)
return (
  <>
    <Header/>
    <Card1/>
    <Card2/>
    {/* <img src="./src/assets/hero.png"/> */}
    <img src={reactLogo} />
   
    </>
  )
}

export default App
