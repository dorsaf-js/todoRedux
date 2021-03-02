import {createStore} from 'redux'
import TodoReducer from './reducer/TodoReducer'
const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store=createStore(TodoReducer,devtools)
export default store;