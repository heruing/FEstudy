import { useState } from "react";

export default function TodoForm({ handleSubmit: handleParentSubmit }) {
  const [newTodo, setNewTodo] = useState("");

  const handleChangeTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleParentSubmit(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={newTodo} onChange={handleChangeTodo} />
    </form>
  );
}
