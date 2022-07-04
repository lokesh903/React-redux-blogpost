const initialState = [{
    id:0,
    title:"React",
    content:"assdertt"
},{
    id:1,
    title:"Mongo",
    content:"assdddae"
},{
    id:2,
    title:"Express",
    content:"assdddae"
}
]

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      state=[...state,action.payload]
      return state
    case "UPDATE_BLOG":
      var update=state.map((blog)=>  blog.id===action.payload.id ? action.payload : blog )
      state=update
      return state
    case "DELETE_BLOG":
      state=state.filter((blog)=> blog.id!==action.payload )
      return state
    default:
    return state

  }
}
export default blogReducer