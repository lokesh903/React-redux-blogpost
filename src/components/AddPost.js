
import { toast } from "react-toastify";
import React, { useState } from "react";

import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function AddPost() {
  var [title, setTitle] = useState("");
  var [content, setContent] = useState("");
  var blogs =useSelector((state)=>state)
  var dispatch =useDispatch()
  var navigate = useNavigate()
  var handelSubmit=(e)=>{
    e.preventDefault()
    var checkTitle = blogs.find(blog => blog.title===title )
   
    if(checkTitle){
      return toast.error("Title already exists")
    }
    if(!title || !content){
      
      return toast.warning("All Fields are neccessary")

    }
    var data = {
      id:blogs[blogs.length - 1].id+1,
      title,
      content
    }
    
    dispatch({type:"ADD_BLOG",payload:data})
    toast.success("Blog Added Successfully")
    navigate("/")

    
  }
  
  
  return (
    <div className="container my-5 ">
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <h3>Blog title</h3>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Add Your Caption Here"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <h3>Content of Blog</h3>

          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="d-flex justify-content-md-end">
          <input
            to="/add"
            type="submit"
            className="btn btn-outline-dark pull-right"
            
          />
            
          
        </div>
      </form>
    </div>
  );
}

export default AddPost;
