import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {useParams} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"

function EditPost() {
  var [title, setTitle] = useState("");
  var [content, setContent] = useState("");
  var {id} = useParams()
  var blogs= useSelector((state)=>state)
  var dispatch=useDispatch()
  var navigate=useNavigate()
  const currentBlog=blogs.find( blog => blog.id === parseInt(id))
  useEffect(()=>{
    if(currentBlog){
      setTitle(currentBlog.title)
      setContent(currentBlog.content)
    }
  },[currentBlog])

  var handelSubmit=(e)=>{
    e.preventDefault()
    var checkTitle = blogs.find( blog => blog.id !== parseInt(id) && blog.title===title  )
   
    if(checkTitle){
      return toast.error("Title already exists")
    }
    if(!title || !content){
      
      return toast.warning("All Fields are neccessary")

    }
    var data = {
      id:parseInt(id),
      title,
      content
    }
    
    dispatch({type:"UPDATE_BLOG",payload:data})
    toast.success("Blog Added Successfully")
    navigate("/")

    
  }

  return (
    <div className="container my-5 ">
      {currentBlog?(
        <>
        <form onSubmit={handelSubmit}>

       <div className="mb-3">
       <h3>
         Edit Blog {id}'s title 
       </h3>
       <input
         type="text"
         className="form-control"
         id="exampleFormControlInput1"
         placeholder="Add Your Caption Here"
         value={title}
         onChange={(e)=>{setTitle(e.target.value)}}
         />
     </div>
     <div className="mb-3">
       <h3>
         Edit Content of Blog
       </h3>
       
       <textarea
         className="form-control"
         id="exampleFormControlTextarea1"
         rows="3"
         value={content}
         onChange={(e)=>{setContent(e.target.value)}}
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
       </>
       ):(
        <h1>Blog with the given ID does not exists !!</h1>
       )}
  </div>
  )
}

export default EditPost
