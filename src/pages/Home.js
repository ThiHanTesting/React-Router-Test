import useFetch from '../hook/useFetch';
import './Home.css'



function Home() {
  let url = 'http://localhost:3002/blogs'
  let { data : blogs  , loading , error } = useFetch(url);

  return (
   <div className='Home' >
    {error && <div></div> }
    {loading && <div>loading....</div> }
    {blogs && blogs.map(blog => (
      <div key={blog.id} className='card' >
        <h3>{blog.title}</h3>
        <p>posted by - {blog.author}</p>zz
        <a href="">Read More</a>
      </div>
    )) }
   </div>
  );
}

export default Home;
