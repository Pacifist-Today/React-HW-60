import {useEffect, useState} from "react";
import Post from "./Post";

const PostCatalog = () => {
    const [catalog, getCatalog] = useState([])

    const parsePosts = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
        getCatalog(res)
    }

    useEffect(() => {
        parsePosts()
    }, [])

    return (
        <div className="posts">
            <ul className="posts__list">
                {
                    catalog.map((value, index) => {
                        return <Post key={index} title={value.title} body={value.body} />
                    })
                }
            </ul>
        </div>
    )
}

export default PostCatalog