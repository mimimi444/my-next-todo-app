import styles from "../Todo.module.css"

export default function InputTodo({
    changeValue,
    addTodo,
    inputTodo
}){

    return(
        <section className={styles.todoInput}>
            <form onSubmit={addTodo}>
                <input type="text" id="addTodoItem" name="addTodoItem" placeholder="TODOを入力" value={inputTodo} onChange={changeValue}/>
                <button type="submit" className={styles.add}>追加</button>
            </form>
        </section>
    )
}