import React, {useState}from "react";

function Keypad (){
    const [password, setPassword] = useState("")
    const handleChange = (e)=>{
         setPassword(e.target.value)
    }
    console.log('Entering password...')
    console.log(password)
    return (
        <div>
            <input type="password" onChange={handleChange}/>
        </div>
    )
}

export default Keypad;