import React, {Component} from 'react'
import classNames from 'classnames'
export default class Footer extends Component {
    renderFilter(filter, name) {
        const selected = classNames({
            selected: filter === this.props.filter
        })
        return (
            <li>
                <a href='#' className={selected} onClick={e => {
                    e.preventDefault()
                    this.props.onFilterChange(filter)
                }}>
                    {name}
                </a>
            </li>

        )
    }

    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.unCompletedNum}</strong> item left</span>
                <ul className="filters">
                    {this.renderFilter('SHOW_ALL', 'All')}
                    {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                    {this.renderFilter('SHOW_ACTIVE', 'Active')}
                </ul>
                <button className="clear-completed" onClick={this.props.onClearCompleted}>Clear completed</button>
            </footer>

        )
    }
}

