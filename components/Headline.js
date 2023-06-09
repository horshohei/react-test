import React from "react"
import styles from '@/styles/Home.module.css';

export function Headline(props) {
    return (
        <div>
            <h1 className={styles.title}> {props.page} Page</h1>

            <p className={styles.description}>
                Get started by editing {props.code}
            </p>
            <button onClick={props.onClick}>ボタン</button>
        </div>
            )
}