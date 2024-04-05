import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <>
      {todos.map((index) => (
        <TodoItem key={index} item={index} />
      ))}
    </>
  );
}
