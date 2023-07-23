import React, { useState } from 'react'
import data from './data'

const  List =() =>{
  const [people,setPeople] = useState(data)

  return (
    <>
       {
        people.map((person) =>{
          const {id,name,age,image} = person
          return <div key={id}>
              <h1>{name}</h1>
              <p>{age}</p>
              <img className="rounded-full w-20 h-20" src={image} alt=""/>           
            </div>
        
       })
      }
       
        <button type="button" onClick={()=>{setPeople([])}} class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg
         shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5
         text-center mr-2 mb-2 ">clear all</button>

    </>
  )
}

export default List