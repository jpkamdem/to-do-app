import styles from './footer.module.css'

export default function Footer({ completedTodos, todos }) {
  return (
    <footer className={styles.footer}>
      <h1>Completed todos : {completedTodos}</h1>
      <h1>All todos : {todos.length}</h1>
    </footer>
  );
}
