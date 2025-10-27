'use client'

import { useState } from "react";
import styles from "./Todo.module.css";
import InputTodo from "./InputTodo/InputTodo";
import IncompleteTodoLists from "./IncompleteTodoLists/IncompleteTodoLists"
import CompleteTodoLists from "./CompleteTodoLists/CompleteTodoLists"

export default function Todo(){
    const [inputTodo, setInputTodo] = useState("");
    const [incompleteTodos, setIncompleteTodo] = useState(["TODOです1","TODOです2"]);
    const [completeTodos, setCompleteTodo] = useState(["完了したTODO1","完了したTODO2"]);

    // 入力時の値変更
    const changeValue = (e)=>{
        setInputTodo(e.target.value);
    }
    // Form送信時に未完了のTODO追加
    const addTodo = (e)=>{
        e.preventDefault();
        const newIncompleteTodos = [...incompleteTodos, inputTodo];
        setIncompleteTodo(newIncompleteTodos);
        setInputTodo((prev)=>"")
    }

    // 完了ボタンを押すと未完了のTODOへアイテム追加
    const complete =(index)=>{
        // 完了ボタンの対象のTODOをのぞいた配列を未完了TODOの配列に返す
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        // 完了TODOの配列に完了したTODOを追加
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        // 未完了TODOと完了TODOの状態を更新
        setIncompleteTodo(newIncompleteTodos);
        setCompleteTodo(newCompleteTodos);
    }

    //削除ボタンを押すと未完了TODOの配列から対象のTODOアイテムを削除
    const deleteTodo = (index)=>{
        //spliceで該当のindexの項目を削除
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        // 未完了TODOの状態を更新
        setIncompleteTodo(newIncompleteTodos);

    }

    // 戻すボタンを押すと該当のTODOを未完了TODOへ追加
    const undo =(index)=>{
        // 戻すTODOを除いた配列を完了TODOに返す
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1)

        // 未完了TODOに戻したTODOを追加した配列を返す
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        // 未完了TODOと完了TODOの状態を更新
        setIncompleteTodo(newIncompleteTodos);
        setCompleteTodo(newCompleteTodos);
    }

    return(
        <>
        <h2>Todoリスト</h2>

        <InputTodo
            changeValue={changeValue}
            addTodo={addTodo}
            inputTodo={inputTodo}
        />

        <IncompleteTodoLists
            incompleteTodos={incompleteTodos}
            complete={complete}
            deleteTodo={deleteTodo}
            />

        <CompleteTodoLists
        completeTodos={completeTodos}
        undo={undo}
        />
        
        </>
    );    
}