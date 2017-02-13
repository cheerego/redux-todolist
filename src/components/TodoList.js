import React from 'react'
import TodoItem from './TodoItem'
class TodoList extends React.Component {
    static defaultProps = {}
    static propTypes = {}

    constructor(props) {
        super(props)
    }

    handleOnChange() {
        let allCompleted = this.props.todos.every((todo) => {
            return todo.completed == true
        })

        if (allCompleted) {
            console.log('un')
            this.props.onUncompletedAll()
        }
        else {
            console.log('com')
            this.props.onCompletedAll()
        }
    }

    render() {
        return (
            <section className="main">
                <input
                    className="toggle-all"
                    type="checkbox"
                    onChange={::this.handleOnChange}
                    checked ={this.props.todos.every((todo) => todo.completed == true)}
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        this.props.todos.map(
                            (todo, index) =>
                                <TodoItem
                                    dispatch={this.props.dispatch}
                                    index={index}
                                    key={index}
                                    todo={todo}
                                    onTodoEdit = {()=> this.props.onTodoEdit}
                                    onTodoChange={() => this.props.onTodoChange(index)}
                                    onTodoDelete={() => this.props.onTodoDelete(index)}
                                />
                        )
                    }
                </ul>
            </section>
        )
    }
}
export default TodoList
