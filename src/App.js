import React, { useEffect } from "react";
import TodoList from "./todo/todo-list";
import Context from "./context";
import Loader from "./loader/loader";
import Modal from "./modal/modal";

const AddTodo = React.lazy(() => import("./todo/add-todo"));

function App() {
  const [todos, setTodo] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
      .then((response) => response.json())
      .then((response) => {
        setTodo(response);
        setLoading(false);
      });
  }, []);

  function handleTodoItemToggle(id) {
    const newState = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodo(newState);
  }

  function handleTodoItemRemove(id) {
    setTodo(todos.filter((item) => item.id !== id));
  }

  function handleTodoCreate(title) {
    setTodo(
      todos.concat([
        {
          id: new Date(),
          title,
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ handleTodoItemRemove }}>
      <div className={`wrapper`}>
        <h1>My react</h1>
        <Modal />
        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreateTodo={handleTodoCreate}></AddTodo>
        </React.Suspense>
        {isLoading && <Loader />}
        <TodoList list={todos} onToggle={handleTodoItemToggle} />
      </div>
    </Context.Provider>
  );
}

export default App;
