import React from 'react'
import classNames from 'classnames'
import {editTodo} from '../actions/actions'
class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editable: false
        }
    }

    onEditable() {
        if (this.state.editable)
            return

        this.setState({
            editable: true
        })
    }

    onTodoEdit(e) {
        if (e.keyCode !== 13) return
        this.setState({
            editable: false
        })
        this.props.dispatch(editTodo(this.props.index,this.input.innerHTML))
    }

    render() {
        const completed = classNames({
            'completed': this.props.todo.completed
        })

        return (
            <li className={completed}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onChange={this.props.onTodoChange}
                        checked={this.props.todo.completed}
                    />
                    <label ref={val => this.input = val}
                        onDoubleClick={::this.onEditable}
                        onKeyDown={::this.onTodoEdit}
                        contentEditable={this.state.editable}>
                        {this.props.todo.text}
                    />
                    <button className="destroy" onClick={this.props.onTodoDelete}></button>
                </div>
                <input className="edit" value="Rule the web"/>
            </li>
        )
    }
}

export default TodoItem
