import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          placeholder="I should do..."
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button className={styles.modernBtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
