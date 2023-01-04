//& Import modules
import './Home.scss';
import { useState } from 'react';
import articleAPI from '../../Store/API/articleAPI.js';
// access to our store
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../Store/actions/index.js';
import { toggleDone, addTaskSlice } from '../../Store/reducers/test.slice.js';

const Home = () => {
  //* ------------------ USE REDUX CLASSIC --------------- *//
  const [inputValue, setInputValue] = useState(null);
  const [allTasks, setAllTasks] = useState([]);

  const task = useSelector((state) => state.task.value); //be carfeul key from reducer root
  const tasks = useSelector((state) => state.task.valueAdded); //be carfeul key from reducer root

  const dispatch = useDispatch();
  const { addTodo, updateTodo, defaultTodo } = bindActionCreators(actionCreators, dispatch);

  const addTask = () => {
    allTasks.push(inputValue);
    setAllTasks(allTasks);
    addTodo({ valueAdded: [...allTasks] });
  };
  //on action, change the value
  const updateTask = () => updateTodo({ value: inputValue });
  //! be careful when you control with console.log, it activates your action !!!
  const handleInput = (event) => setInputValue(event.target.value);

  const defaultTask = () => defaultTodo();

  //* ------------------ USE REDUX TOOLKIT --------------- *//

  const taskSlice = useSelector((state) => state.slice);
  const done = taskSlice.done;
  const allTasksSlice = taskSlice.tasks;
  const taskToAdd = 'Fredo cadeaux';
  const add = () => dispatch(addTaskSlice(taskToAdd));

  //* ------------------ FILTER CATEGORY TESTS --------------- *//

  // const [array, setArray] = useState([]);
  // let articles = articleAPI.allItems();

  // const filterCategory = () => {
  //   articles.map((article) => {
  //     array.push(article.category);
  //   });
  //   return array;
  // };

  // const categories = Array.from(new Set(filterCategory()));

  return (
    <section className="home">
      <h1 id="title">Home</h1>
      {/* {categories.map((category) => (
        <p key={category}>{category}</p>
      ))} */}

      {/* ************** TEST REDUX CLASSIC *********************/}
      <div className="redux__container">
        <input onChange={handleInput} className="redux__input" type="text" placeholder="Enter something" />
        <p className="redux__task">{task === 'Default value' ? task : inputValue}</p>
        <ul>
          {tasks.map((task, id) => (
            <p className="redux__task" key={id}>
              {task}
            </p>
          ))}
        </ul>
        <section className="redux__btn">
          <button onClick={addTask}>Add task</button>
          <button onClick={updateTask}>Update task</button>
          <button onClick={defaultTask}>Return default task</button>
        </section>

        {/* ************** TEST SLICE *********************/}
        <section className="redux__test-slice">
          <h2>List of slice tasks : </h2>
        </section>

        {done && <p>Good !</p>}

        {allTasksSlice.map((task, id) =>
          <p key={id}>{task}</p>
        )}

        <section className="redux__btn">
          {/* <button onClick={() => dispatch(addTaskSlice(taskToAdd))}>Add task slice</button> */}
          <button onClick={add}>Add task slice</button>
          <button onClick={() => dispatch(toggleDone())}>Toogle boolean task slice</button>
        </section>
      </div>
    </section>
  );
};

export default Home;
