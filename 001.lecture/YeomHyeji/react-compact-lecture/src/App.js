import "./App.css";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function App() {
  const [todo, setTodo] = useState([]);

  const handleSubmit = (newTodo) => {
    setTodo([...todo, { title: newTodo, completed: false, id: Math.random() }]);
  };

  return (
    <>
      <div className="App">TODO</div>
      <div className="App">
        {todo.length === 0 ? (
          <div>
            <div>할 일을 추가해보세요.</div>
            <TodoForm handleSubmit={handleSubmit} />
          </div>
        ) : (
          <>
            {todo.map((item, index) => (
              <TodoItem
                item={item}
                key={item.id}
                index={index}
                setTodo={setTodo}
              />
            ))}
            <TodoForm handleSubmit={handleSubmit} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
