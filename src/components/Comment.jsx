
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from './Comment.module.css'
import { useState } from 'react';


export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){

        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
   }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/50035007?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Isaac Ziroldo</strong>
                            <time title='30 de Janeiro às 22:29h' dateTime='2023-01-30 22:29:09'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}