import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title}) => {
 

    return ( 
    
    <div className="blog-preview">
        <h1>{title}</h1>
        {blogs.map( blog=> 
        <article>
            <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            </Link>
        </article>
            )}
    </div>);
}
 
export default BlogList;
