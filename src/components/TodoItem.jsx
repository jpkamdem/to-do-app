import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const handleDelete = (item) => {
    console.log("Deleted", item);
    setTodos(todos.filter((todo) => todo !== item));
  };
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
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
