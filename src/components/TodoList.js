import {useSelector} from 'react-redux'
import AddTasks from './AddTasks'
import ListTasks from './ListTasks'

const TodoList = () => {
    const taskList = useSelector(state => state)
    return (
        <div>
            <AddTasks/>
            <ListTasks taskList={taskList}/>
        </div>
    )
}

export default TodoList
