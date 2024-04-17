import Home from '../pages/Home'
import About from '../pages/About'
import App from '../App'
import Contact from '../pages/Contact.js'
import BlogDetail from '../pages/BlogDetail.js'
import NotFound from '../pages/NotFound.js'

import {
    createBrowserRouter,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/", // localhost:3000
      element:<App/>,
      children : [
        {
          path : '', // localhost:3000
          element : <Home/>
        },{
          path : '/about' ,// localhost:3000/about
          element : <About/>
        },{
          path : '/contact' , // localhost:3000/contact
          element : <Contact/>
        },{
          path : '/blogs/:id',
          element : <BlogDetail />
        },{
          path : '*',
          element : <NotFound/>
        }
      ]
    },
  ]);

  export default router 