// Code EyesOnMe Component Here
import React, {useState} from 'react'
//const [blur, setBlur] = useState(true)
function EyesOnMe() {

    function handleFocus(){
        
        console.log('Good!')
    }
    function handleBlur(){
        console.log('Hey! Eyes on me!')
    }
  return (
    <div><button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button></div>
  )
}

export default EyesOnMe
