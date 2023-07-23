import React, {useState} from 'react'
import List from './list'
import data from './data'
import './style.css'

function App() {
  const [birthday,setBirthday] = useState('7 birthdays today')
  const handleBirthday =() =>{
    if (birthday =='7 birthdays today'){
      setBirthday('happy birthday')
    } 
    else{
      setBirthday('7 birthdays today')
    console.log(setBirthday)
  }}
  return (
    <div>

     <button className='btn' onClick={handleBirthday}><b> 7 birthdays today</b></button>
     <List />
    </div>
  )
}

export default App;
