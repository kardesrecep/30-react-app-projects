import React from 'react'

const Colors = ({text,classes}) => {
  return (
   
    <h1 className={!classes ? 'title text-center': classes && "title"}>
        
        {!text?"Colors": text}</h1>
  )
}

export default Colors