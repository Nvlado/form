import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const {id} = useParams()
    const {data : blog} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {method: 'DELETE'})
    .then( ()=> {history.push("/")})
}

    return ( 
    
    <div>
    {blog && ( 
    
    <article className="blog-details">
        <h2>{blog.title}</h2>
        <p>{blog.author}</p>
        <p>{blog.body}</p>
        <button onClick={handleDelete}>Delete me</button>
    </article> 
    )
    }
    </div>

    );
}
 
export default BlogDetails;
