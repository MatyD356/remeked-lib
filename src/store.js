import { createStore, applyMiddleware } from 'redux'
import database from './firebase'
import thunkMiddleware from 'redux-thunk'

const GET_TASKS = 'get tasks'
const ADD_TASK = 'add task'
const REMOVE_TASK = 'remove task'
const UPDATE_TASK = 'update task'

export const getTasks = (tasks) => ({ type: GET_TASKS, tasks })
export const addTask = (task) => ({ type: ADD_TASK, task })
export const removeTask = (task) => ({ type: REMOVE_TASK, task })
export const updateTask = (task) => ({ type: UPDATE_TASK, task })

export function getTasksThunk() {
  return dispatch => {
    const tasks = [];
    database.ref('/').once('value', snap => {
      snap.forEach(data => {
        let task = data.val();
        tasks.push(task)
      })
    })
      .then(() => dispatch(getTasks(tasks)))
  }
}

export function watchTaskAddedEvent(dispatch) {
  database.ref(`/`).on('child_added', (snap) => {
    dispatch(addTask(snap.val()));
  });
}

export function watchTaskRemovedEvent(dispatch) {
  database.ref(`/`).on('child_removed', (snap) => {
    dispatch(removeTask(snap.val()));
  });
}

export function watchTaskChangeEvent(dispatch) {
  database.ref(`/`).on('child_changed', (snap) => {
    dispatch(updateTask(snap.val()));
  });
}


function Reducer(state = [], action) {
  switch (action.type) {
    case GET_TASKS:
      return action.tasks
    case ADD_TASK:
      return [...state, action.task]
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.task.id)
    case UPDATE_TASK:
      return state.map((item) => {
        if (item.id === action.task.id) {
          item = Object.assign({}, action.task)
        }
        return item
      })
    default:
      return state
  }
}

export default createStore(Reducer, applyMiddleware(thunkMiddleware))