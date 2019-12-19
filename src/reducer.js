import { combineReducers } from 'redux';


function Post(state = {post: ''}, action) {
    switch (action.type) {
        case 'GET_POST':
          return action.obj 
        default: return state
    }
}


function AllPosts(state = {posts: []}, action){
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return action.array 
    default: return state
  }
}


function VisiblePosts(state = {isVisibleContentPost: []}, action){
  switch (action.type) {
    case 'GET_CONTENT_VISIBLE':
      return action.array 
    case 'CHANGE_CONTENT_VISIBLE':
      return action.array   
    default: return state
  }
}


export default combineReducers({
  Post,
  AllPosts,
  VisiblePosts
  });