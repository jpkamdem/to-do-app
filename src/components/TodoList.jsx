import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <>
      {sortedTodos.length > 0 ? (
        <div className={styles.list}>
          {sortedTodos.map((item) => (
            <div key={item.name}>
              <TodoItem item={item} todos={todos} setTodos={setTodos} />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
