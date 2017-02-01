import React, { Component } from 'react';

class PostsIndex extends Component {
  // lifecycle method - if a function is named like below, React will call this automatically whenever component
  // is about to be rendered to the DOM for the first time.  It won't be called on re-renders.
  componentWillMount() {
    //console.log('this would be a good time to call an action creator to fetch posts');
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;