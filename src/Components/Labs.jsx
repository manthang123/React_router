import React from 'react'
import { useLinkClickHandler } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Labs() {
    const navigate = useNavigate ();
   function ClickHandler (){
    navigate("/about")
   }
  return (
    <div>
      <div>
        Thiss is  Lab page
      </div>
      <button onClick={ClickHandler}>move to About page </button>
    </div>
  )
}

export default Labs
