import React from 'react'
import { useNavigate } from 'react-router-dom'


const About =() => {
    const navigate = useNavigate();
 function changeHandler (){
    navigate("/support");
 }

  return (
    <div>
      <div>
        This is about page
      </div>
      <button onClick={changeHandler}> to support page </button>
    </div>
  )
}
export default About
