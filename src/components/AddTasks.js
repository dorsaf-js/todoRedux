import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../js/action/ActionTasks";

const AddTasks = () => {
  const dispatch = useDispatch();
  const [myInput, setMyInput] = useState("");
  const handleChange = (e) => {
    setMyInput(e.target.value);
  };
  const add = () => {
    if (myInput) {
      dispatch(addTask({ task: myInput, isDone: false, id: Math.random() }));
      setMyInput("");
    } else {
      alert("please enter a valide task");
    }
  };
  return (
    <div className="header">
      <h1>To-do-List!!!</h1>
      <input
        type="texte"
        placeholder="enter a new  task"
        onChange={handleChange}
        value={myInput}
      />
      <div className="btn">
        <button onClick={add}>Add</button>
        <button>All</button>
      </div>
    </div>
  );
};

export default AddTasks;
