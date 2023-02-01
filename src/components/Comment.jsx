
import { ThumbsUp, Trash } from "phosphor-react"
import styles from './Comment.module.css'


export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/50035007?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Isaac Ziroldo</strong>
                            <time title='30 de Janeiro às 22:29h' dateTime='2023-01-30 22:29:09'>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom, parabéns!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span> 20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}