import React, { useState } from 'react'
import Button from './Button'

export default function Form({ updateMonster}) {
    const [userInput, setUserInput] = useState({
        size: 1,
        numOfEyes: 2,
        numOfLegs: 2
    })
    console.log("form", userInput)
    function handleChange(event) {
        console.log("handleChange")
        setUserInput({...userInput, [event.target.name]: Number(event.target.value)})
    }

    function handleSubmit(event) {
        console.log("handleSubmit")
        event.preventDefault()
        updateMonster(userInput)
    }
    return (
        <form  onSubmit={handleSubmit}>
        <label>
            Size:
            <input onChange={handleChange} type="range" min="1" max="5" name="size" value={userInput.size}/>
        </label>
        <label>
            Number of eyes:
            <input onChange={handleChange} type="range" min="1" max="5" name="numOfEyes" value={userInput.numOfEyes}/>
        </label>
        <label>
            Number of legs:
            <input onChange={handleChange} type="range" min="1" max="5" name="numOfLegs" value={userInput.numOfLegs}/>
        </label>
        <Button text="Create"></Button>
    </form>
    )
}

