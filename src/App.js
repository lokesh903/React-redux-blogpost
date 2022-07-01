import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/index"
import AddPost from "./components/AddPost/index"
import Home from "./components/Home/index"
import EditPost from "./components/EditPost/index"

import {Route,Routes} from  "react-router-dom"
function App() {
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
