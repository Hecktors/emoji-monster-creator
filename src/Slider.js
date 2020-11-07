import {useState} from 'react'

export default function Slider({name, keyName, max, getSliderInput, updateSlider}) {
    const inputName = name.toLowerCase().replace(' ', '_')
    const [userInput, setUserInput] = useState(2)

    const handleChange = (event) => {
        console.log(event.target.value)
        setUserInput(event.target.value)
        getSliderInput(keyName, event.target.value)
    }

    const updateSlider = ({num}) => {
        setUserInput(num)
    }

    return (
        <div>
            <label>{name}</label><br/>
            <input onChange={handleChange} value={userInput} type="range" name={inputName} min="1" max={max}/>
        </div>
    )
}
