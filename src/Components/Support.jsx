import React from 'react'
import { useNavigate } from 'react-router-dom'
function Support() {
    const navigate = useNavigate();
   function Backhandler(){
    navigate(-1);
    }
  return (
    <div>
      <div> this is support page</div>
      <button onClick={Backhandler}>Go back</button>
    </div>
  )
}

export default Support
