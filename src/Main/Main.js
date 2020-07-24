import React from 'react';
import './Main.scss'
import Book from '../Book/Book'
import { connect } from 'react-redux';
import { getTasksThunk } from '../store'

const mapState = state => ({
  tasks: state
})
const mapDispatch = dispatch => {
  dispatch(getTasksThunk())
  return {
  }
}
class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        {this.props.tasks.map((item) => {
          return <Book
            key={item.id}
            id={item.id}
            name={item.task}
            author={item.author}
            length={item.length}
            status={item.status}
          />
        })}
      </main>
    )
  }
}

export default connect(mapState, mapDispatch)(Main);