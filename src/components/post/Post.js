import { Component } from "react";
import AddPosts from "../addPosts/AddPost";
import SinglePost from "../singlePost/Singlepost";

class Post extends Component {
    state = {
        posts: [
            { title: 'POST 1', desc: "Post 1 Description  Here!", id: 1 },
            { title: 'POST 2', desc: "Post 2 Description  Here!", id: 1 },
            { title: 'POST 3', desc: "Post 3 Description  Here!", id: 1 },
            { title: 'POST 4', desc: "Post 4 Description  Here!", id: 1 }
        ],
        PostTitle: 'List Of All Posts',
        showPost: true
    }
    togglePost = () => {
        this.setState({
            showPost: !this.state.showPost
        })
    }
    getPost() {
        if (!this.state.showPost) return null;
        let posts = this.state.posts.map((post, index) => (
            <SinglePost
                key={post.id}
                title={post.title}
                desc={post.desc}
            />
        ))
        return (
            <div className="flex my-3">
                {posts}
            </div>
        )
    }
    render() {
        return (
            <div>
                <h3 className="text-3xl my-3">{this.state.PostTitle}</h3>
                <button onClick={this.togglePost} className="rounded-4xl px-8 py-4 hover:bg-red-700 bg-red-400 text-white font-semibold" >
                    {this.state.showPost ? 'Hide post' : 'Show post'}</button>
                <br></br>
                {this.getPost()}
                <div className="my-5">
                <AddPosts/>
                </div>
            </div>
        )
    }
}
export default Post;

