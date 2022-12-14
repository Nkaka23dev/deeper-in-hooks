import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const history = useHistory();   
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(
            history.push('/')
        )
    }
    return (
        <div className="blog-details">
            {isPending && <div>Looding......</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete} >Delete</button>
                </article> 
            )}
        </div>
    );
}
export default BlogDetail;