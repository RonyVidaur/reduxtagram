//increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment
export function addComment(postId, author, comment){
  return {
    type: 'ADD_COMMENT',
    author,
    comment
  }
}

//remove comment
export function removeComment(postId, index) {
  type: 'REMOVE_COMMENT',
  postId,
  index
}
