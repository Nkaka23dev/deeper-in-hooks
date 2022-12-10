import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('nkaka');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)
    const blog = { title, body, author };
    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(blog)
      }).then(
      console.log("New Record added to the database"),
      setIsPending(false),
      // history.go(-1)
      history.push('/')
      );
    }, 1000);
  }
  return (
    <div className="create">
      <h1>Create The Project </h1>
      <form style={{ marginTop: '30px' }} onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Blog Title: </label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='nkaka'>nkaka</option>
          <option value='morio'>morio</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Data to dataBase.....</button>}
      </form>
    </div>
  );
}
export default Create;