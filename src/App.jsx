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
      <Route index element={<About />} /> 
      <Route index element={<Comments />} /> 
      <Route index element={<Blogs />} /> 
      
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
