import React from 'react'

const car = props => {
    return (
        <div>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            { props.children }
        </div>
    )
}

export default car;