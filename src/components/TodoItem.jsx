import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  const strikeItem = (name) => {
    const newArr = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArr);
  };
  const className = item.done ? styles.completed : ('')
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => strikeItem(item.name)}>{item.name}</span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteBtn}
          >
            x
          </button>
        </span>
        <hr className={styles.line} />
      </div>
    </div>
  );
}
