import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {CompleteTask,deleteTask} from '../js/action/ActionTasks'
import ModalComponent from './ModalComponent';

const ListTasks = ({taskList}) => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState()

  const handleClose = () => setShow(false);
  const handleShow = (id) => {setShow(true);setId(id)}
    const dispatch =useDispatch()
    return (
        <div className='main'>
            {taskList.map(el=><div key={el.id} className='list'>
                <span className={el.isDone?'lineTh':'text'}>{el.task}</span>
                <button onClick={()=>dispatch(CompleteTask(el.id))}>{el.isDone?'Undo':'Complete'}</button>
                <button onClick={()=>dispatch(deleteTask(el.id))}>Delete</button>
                <button onClick={()=>handleShow(el.id)} >Edit</button>
                <ModalComponent show={show} handleClose={handleClose} id={id} />
                </div>
            )}
            
        </div>
    )
}

export default ListTasks
