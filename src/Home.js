import { useEffect, useState } from "react";
import BlogList from "./BlogList";

 const Home = () => {  
 const [blogs, setBlogs] = useState([
    {title: "My new website", body: "Lorem Ipsum", author: "Eric Nkaka", id:1},
    {title: "Welcome to my part", body: "Lorem Ipsum", author: "Victor Ngaboyamahoro", id:2},
    {title: "Web drev top tip", body: "Lorem Ipsum", author: "Yve Runyange", id:3},
    {title: "Love Coding and Bako", body: "Lorem Ipsum", author: "Eric Nkaka", id:4},
 ]); 
 const [name, setName] = useState('Bigirimana');
 const handleClick = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
 } 

 useEffect(() => {
    console.log("Use effect is running");
 },[name]);
    return ( 
        <div className="home">
        <BlogList blogs={blogs} title = "ALL Blogs" handleClick={handleClick}/>
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Eric Nkaka")} title = "Eric Nkaka's blogs" handleClick={handleClick}/> */}
        <button onClick={() => {setName("Ngaboyamahoro")}} >Change Name</button>
        <p>{name}</p>
        </div>
     );
}
 
export default Home;