
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
   return (
      <div className="home">
         {error && <div>{error}</div>}
         {isPending && <div>Isloading....</div>}
         {blogs && <BlogList blogs={blogs} title="ALL Blogs" />}
      </div>
   );
}

export default Home;