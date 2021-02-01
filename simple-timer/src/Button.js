import React from 'react'

const  Button = (props) => {
    return(
        <button id = {props.action}>
            {props.action}
        </button>

    )
}

export default Button