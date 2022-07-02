import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar"
import AddPost from "./components/AddPost"
import Home from "./components/Home"
import EditPost from "./components/EditPost"
import { useSelector } from "react-redux";

import {Route,Routes} from  "react-router-dom"
function App() {
  const blogs = useSelector((state)=>state)
  console.log(blogs);
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
      <Route  path="/" element={ <Home /> } />
      <Route  path="/add" element={<AddPost />} />
      <Route  path="/edit/:id" element={ <EditPost />} />
      </Routes>
      
    </div>
  );
}

export default App;
