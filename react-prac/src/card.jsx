import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='Card'>
      <h1>{props.title}Title</h1>
      <p>{props.title}description</p>
    </div>
  )
}

export default Card
