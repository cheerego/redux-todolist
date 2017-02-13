import React from 'react'
import 'normalize.css/normalize.css'
import 'todomvc-app-css/index.css'
import {connect} from 'react-redux'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import {
    VisibilityFilters,
    addTodo,
    completeTodo,
    setVisibilityFilter,
    deleteTodo,
    clearCompleted,
    completedAll,
    uncompletedAll, editTodo
} from '../actions/actions'
@connect((state) => {
    let filter = state.visibilityFilter
    let todos = []
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            todos = state.todos
            break;
        case VisibilityFilters.SHOW_ACTIVE:
            todos = state.todos.filter((todo) => (todo.completed !== true))
            break;
        case VisibilityFilters.SHOW_COMPLETED:
            todos = state.todos.filter((todo) => (todo.completed === true))
            break;
        default:
            todos = state.todos
            break;
    }
    return {
        visibilityFilter: state.visibilityFilter,
        todos: todos
    }
})
class App extends React.Component {
    static defaultProps = {}
    static propTypes = {}

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        const {dispatch} = this.props
        return (
            <div>
                <section className="todoapp">
                    <header className="header">
                        <AddTodo
                            onAddTodo={text => dispatch(addTodo(text))}/>
                        <h1>todos</h1>
                    </header>

                    <TodoList
                        dispatch={this.props.dispatch}
                        onUncompletedAll={() => dispatch(uncompletedAll())}
                        onTodoEdit={(index, text) => dispatch(editTodo(index, text))}
                        onCompletedAll={() => dispatch(completedAll())}
                        onTodoChange={index => dispatch(completeTodo(index))}
                        onTodoDelete={index => dispatch(deleteTodo(index))}
                        todos={this.props.todos}
                    />
                    <Footer
                        unCompletedNum={this.props.todos.filter((todo) => todo.completed == false).length}
                        filter={this.props.visibilityFilter}
                        onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}
                        onClearCompleted={() => dispatch(clearCompleted())}
                    />
                </section>
                <footer className="info">
                    <p>年三十的晚上到大年初一早上2：50完成</p>
                    <p>双击修改Todo</p>
                    <p>写TodoList，比起Redux，我觉得还是Mobx好用！</p>
                    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
                    <p>Created by <a href="http://todomvc.com">HKN</a></p>
                    <p>Part of <a href="https://github.com/cheerzz?tab=stars">TodoMVC</a></p>
                </footer>

            </div>


        )
    }
}

export default App

