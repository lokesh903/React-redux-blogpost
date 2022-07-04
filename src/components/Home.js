import React from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { toast } from "react-toastify";

function Home() {
  var blogs = useSelector((state)=>state)
  var dispatch=useDispatch()
  var handelDelete= (id)=>{
    dispatch({type:"DELETE_BLOG",payload:id})
    toast.success("Blog successfully deleted!")
  }
  const blogElements = blogs.map((blog)=>{
    return ( <div className="col-md-4 my-5" key={blog.id}>
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://th.bing.com/th/id/OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK?pid=ImgDet&rs=1"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">
          {blog.content}
        </p>
        <Link to={`edit/${blog.id}`} className="btn btn-primary mx-3">
          Edit 
        </Link>
        <button  className="btn btn-danger mx-3" onClick={()=>{handelDelete(blog.id)}}>
          Delete
        </button>
      </div>
    </div>
  </div> )
  })
  return (
    <div className="container my-5 clearfix" >
        <div className="d-flex justify-content-md-end">
          <Link to="/add" type="button" className="btn btn-outline-dark pull-right">
            Add Post
          </Link>
        </div>
     
      <div className="row">
          {blogElements}
          
        </div>
      </div>
   
  );
}

export default Home;
