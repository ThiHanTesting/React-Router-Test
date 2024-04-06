import useFetch from '../hook/useFetch';
import './Home.css'



function Home() {
  let url = 'http://localhost:3002/blogs';
  let { data : blogs , loading, error } = useFetch(url)

  return (
    <div className='Home'>
    {error && <div>{error}</div> }
    {loading && <div>loading ... </div> }
    {blogs && blogs.map(blog => (
      <div className='card' key={blog.id}>
        <h3>{blog.title}</h3>
        <p>Posted by - {blog.author}</p>
        <a href="">Read More</a>
      </div>
    ))}
     </div>
  );
}

export default Home;
