import React from 'react'
import './Timer.css'

function Timer({ time, onTimeClick}) {
    return (
        <h1
            className="timer"
            onClick={ onTimeClick }
        >{ time }</h1>
    )
}

export default Timer
