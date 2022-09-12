const Post = (props) => {
    const {body, title} = props

    return (
        <li className="posts_single-post" data-post-id="Id поста">
            <h3 className="posts__post-title">{title}</h3>
            <p className="posts__post-description">{body}</p>
        </li>
    )
}

export default Post