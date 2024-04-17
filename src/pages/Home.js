import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';

import './Home.css'
import { useEffect } from 'react';

function Home() {
  let url = 'http://localhost:3002/blogs'
  let { data: blogs, loading, error } = useFetch(url);


  return (
    <div className='Home' >
      {error && <div></div>}
      {loading && <div>loading....</div>}
      {blogs && blogs.map(blog => (
        <div key={blog.id} className='card' >
          <h3>{blog.title}</h3>
          <p>posted by - {blog.author}</p>
          <Link to={`/blogs/${blog.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
