import { combineReducers } from 'redux';


const firstStatePost = {
    post: ''
}

function Post(state = firstStatePost, action) {
    switch (action.type) {
        case 'GET_POST':
          return action.obj 
        default: return state
    }
}


const firstStateAllPosts = {
  posts: []
}

function AllPosts(state = firstStateAllPosts, action){
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return action.array 
    default: return state
  }
}


const firstStateContentVisible = {
  isVisibleContentPost: []
}

function VisiblePosts(state = firstStateContentVisible, action){
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