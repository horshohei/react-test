import styles from "@/styles/Home.module.css";
import {Headline} from "./Headline";
import {inputText} from "./inputText";
import {Links} from "./Links";
import Image from "next/image";

export function Main(props) {
    return (
        <main className={styles.main}>
            <Headline
                page={props.page}
                onClick={() => alert("aaa")}
                code={<code className={styles.code}>pages/{props.page}.js</code>}/>
            <inputText />
            <Links />
        </main>
    )
}
