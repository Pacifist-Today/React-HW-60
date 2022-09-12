import React from "react";
import Post from "./Post";

class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://jsonplaceholder.typicode.com/posts',
            catalog: []
        }
    }

    parsePosts = async () => {
        const res = await fetch(this.state.url)
            .then((response) => {
                return response.json();
            })
        this.setState({catalog: res})
    }

    componentDidMount = () => {
        this.parsePosts()
    }

    render() {
        const catalog = this.state.catalog
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
}

export default PostCatalog