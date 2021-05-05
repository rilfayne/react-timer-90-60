import React from 'react'
import './Button.css'

function Button({ isLaunched, onStartTimer }) {
    return (
        <button
            className={ `button ${ isLaunched 
                ? 'button_pause' 
                : 'button_play'}
                `}
            onClick={ onStartTimer }
        />
    )
}

export default Button
