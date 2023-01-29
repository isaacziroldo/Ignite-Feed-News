

export function Post(props) {

    const author = props.author


    return (
        <div>
            <strong>Autor: {author}</strong>
            <p>{props.content}</p>
        </div>
    )
}