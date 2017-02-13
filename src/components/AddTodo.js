import React from 'react'

class AddTodo extends React.Component {
    onKeyUp(e) {
        if (13 !== e.keyCode|| this.input.value =='') {
            return
        }
        this.props.onAddTodo(this.input.value)
        this.input.value = ''
    }

    render() {
        return (
            <input
                onKeyUp={::this.onKeyUp}
                className="new-todo"
                placeholder="What needs to be done?"
                type="text"
                ref={(input) => {
                    this.input = input
                }}
                autoFocus
            />

        )
    }
}
export default AddTodo
