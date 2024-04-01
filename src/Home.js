import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const {data : blogs} = useFetch('http://localhost:8000/blogs/')

    return ( 
        <div>
       {blogs && <BlogList 
       blogs={blogs}
       title="All Titles" />}
        </div>

     );
}
 
export default Home;