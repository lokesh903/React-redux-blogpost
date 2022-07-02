import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

function Home() {
  var blogs = useSelector((state)=>state)
  const blogElements = blogs.map((blog)=>{
    return ( <div className="col-md-4 my-5" id={blog.id}>
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
        <Link to="#" className="btn btn-primary">
          Go somewhere
        </Link>
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
