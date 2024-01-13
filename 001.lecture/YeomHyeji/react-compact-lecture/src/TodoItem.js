export default function TodoItem({ item, setTodo, index }) {
  const handleChange = (event) => {
    setTodo((prevTodo) => {
      const nextTodo = [...prevTodo];
      nextTodo[index] = { ...nextTodo[index] };
      nextTodo[index].completed = event.target.check;
      return nextTodo;
    });
  };

  return (
    <>
      <input type="checkbox" checked={item.completed} onChange={handleChange} />
      <span>{item.title}</span>
    </>
  );
}
