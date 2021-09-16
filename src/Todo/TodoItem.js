import React from "react";
import s from './styles.module.scss'

const styles = {
    li: {
        display: 'flex'
    }
}
export default function TodoItem ({todo, index}){
    return (
        <li>
            <span className={s.wrap}>
                <input type='checkbox'/>
                <strong className={s.wrapInput}>{index +1}</strong>
                {todo.title}
            </span>
            <button>&times;</button>
        </li>
    )
}