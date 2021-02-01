import React from 'react'

const  Number = (props) => {

    let clickHandler = (e) => {
        props.setTime(e.target.id)
    }

    return(
        <button id = {props.num} onClick ={clickHandler}>
            {props.num}
        </button>

    )
}

export default Number