export function getPost(obj){
    return ({type: 'GET_POST', obj});
}

export function getAllPost(array){
    return ({type: 'GET_ALL_POSTS', array});
}