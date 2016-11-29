import React, { PropTypes } from 'react'
import Photo from './Photo'
import Comment from './Comment'

class Single extends React.Component {
  render () {
    // index of the post & get us the post
    const postId = this.props.params.postId
    const i = this.props.posts.findIndex((post) => post.code === postId)
    const post = this.props.posts[i]
    const postComments = this.props.comments[postId] || []
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comment postComments={postComments} />
      </div>
    )
  }
}

export default Single;
