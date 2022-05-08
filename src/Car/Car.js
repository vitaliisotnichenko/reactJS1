import React from 'react'
import classes from './Car.css'
import withClass from "../hoc/withClass";
import PropTypes from 'prop-types'

class Car extends React.Component {


    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        if(this.props.index === 1) {
            this.inputRef.current.focus()
        }
    }

    render() {
        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }

        return (
            <React.Fragment className={classes.Car}>
                <h3>Сar name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete:PropTypes.func
}

export default withClass(Car, classes.Car)