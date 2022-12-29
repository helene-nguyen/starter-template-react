//& Import modules
import './Home.scss';
import { useState } from 'react';
import articleAPI from '../../Store/API/articleAPI.js';
// access to our store
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../Store/actions/index.js';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  
  //use redux
  const task = useSelector((state) => state.task.value); //be carfeul key from reducer root
  const dispatch = useDispatch();
  
  const { addTodo, defaultTodo } = bindActionCreators(actionCreators, dispatch);
  
  const updateTask = () => addTodo({ value: inputValue });
  //on action, change the value
  const defaultTask = () => defaultTodo();
  //! be careful when you control with console.log, it activate your action !!!
  const foo = (event) => {
    setInputValue(event.target.value);
    updateTask();
    return inputValue;
  };

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
      <div className="redux__container">
        <input onChange={foo} className="redux__input" type="text" />
        <p className="redux__task">{task}</p>
        <section className="redux__btn">
          <button onClick={updateTask}>Update task</button>
          <button onClick={defaultTask}>Return default task</button>
        </section>
      </div>
    </section>
  );
};

export default Home;
