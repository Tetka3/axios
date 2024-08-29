import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} /> 
      
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
