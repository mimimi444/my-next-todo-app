import styles from "../Todo.module.css";

export default function CompleteTodoLists({completeTodos, undo}){
    return(
        <section className={styles.todoComplete}>
            <h2>完了のTODO</h2>
             <div>
                <ul>
                    {completeTodos.map((todo, index)=>{
                        return(
                    <li key={todo}>
                        <div>
                        <p>{todo}</p>
                        <button className={styles.undo} onClick={()=>undo(index)}>戻す</button>
                        </div>
                    </li>
                    );
                    })}
                </ul>
            </div>
        </section>
    );
}