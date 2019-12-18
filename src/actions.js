export function getPost(obj){
    return ({type: 'GET_POST', obj});
}

export function getAllPost(array){
    return ({type: 'GET_ALL_POSTS', array});
}

export function getContentVisible(array) {
    return ({type: 'GET_CONTENT_VISIBLE', array});
}

export function changeContentVisible(array) {
    return ({type: 'CHANGE_CONTENT_VISIBLE', array});
}