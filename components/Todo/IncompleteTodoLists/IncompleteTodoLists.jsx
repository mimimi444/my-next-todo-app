import styles from "../Todo.module.css";

export default function IncompleteTodoLists({incompleteTodos, complete, deleteTodo}){
    return(
        <section className={styles.todoIncomplete}>
            <h2>未完了のTODO</h2>
            <div>
                <ul>
                    {incompleteTodos.map(
                     (todo, index)=>{
                        return(
                        <li key={todo}>
                            <div>
                            <p>{todo}</p>
                            <button className={styles.complete} onClick={()=>complete(index)}>完了</button>
                            <button className={styles.delete} onClick={()=>deleteTodo(index)}>削除</button>
                            </div>
                        </li>
                        )
                     }   
                    )}
                </ul>
            </div>
        </section>
    );
}