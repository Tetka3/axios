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
      <Route path="/login" element={<About />} /> 
      <Route path="/login" element={<Comments />} /> 
      <Route path="/login"x element={<Blogs />} /> 
      
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
