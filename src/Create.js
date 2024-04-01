import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState("") 
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("sadko")
    const history = useHistory()
    
const handleClick = (e) => {
    e.preventDefault();
    const blog = {title, body, author}
    fetch('http://localhost:8000/blogs', 
    {
    method: 'POST', 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(blog)
    }
    )
    .then(()=> {history.push("/")})
}


    return ( 
    
    <form className="create">
        <label>Title</label>
        <input onChange={ (e)=> setTitle(e.target.value)} type="text" value={title} required></input>
        <label>Body</label>
        <textarea onChange={ (e)=> setBody(e.target.value)} value={body} required></textarea>
        <label>Select an author</label>
        <select onChange={ (e)=> setAuthor(e.target.value)} value={author}>
            <option value="sadko">Sadko</option>
            <option value="novak">Novak</option>
            <option value="velimir">Velimir</option>
        </select>
        <button onClick={handleClick}>Press me</button>
    </form> 
    
    );
}
 
export default Create;
