import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <>
      {todos.length > 0 ? (
        <div className={styles.list}>
          {todos.map((index) => (
            <TodoItem
              key={index}
              item={index}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
