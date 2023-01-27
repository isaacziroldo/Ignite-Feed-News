

export function Post(props) {

    const author = props.author


    return (
        <div>
            <h1>Autor: {author}</h1>
            <p>{props.content}</p>
        </div>
    )
}