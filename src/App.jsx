import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Comments from "./pages/Comments";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/comments" element={<Comments />} /> 
      <Route path="/blogs"x element={<Blogs />} /> 
      
    </>
  )
);


function App() {
 

  return (
    <>    
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
