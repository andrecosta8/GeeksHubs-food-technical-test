import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className='headerDesign'>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/")},250)}>Home</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/meals")},250)}>Meals</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/addmeal")},250)}>Add Meal</div>
         </div>
  )
}

export default Header