import React from 'react'
import {Link,useParams} from "react-router-dom"
function EditPost() {
  var {id} = useParams()
  return (
    <div className="container my-5 ">
    <div className="mb-3">
      <h3>
        Edit Blog {id}'s title 
      </h3>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Add Your Caption Here"
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
      ></textarea>
    </div>
    <div className="d-flex justify-content-md-end">
        <Link to="/add" type="button" className="btn btn-outline-dark pull-right">
          Add Blog
        </Link>
      </div>
  </div>
  )
}

export default EditPost
