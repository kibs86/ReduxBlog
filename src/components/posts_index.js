import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // lifecycle method - if a function is named like below, React will call this automatically whenever component
  // is about to be rendered to the DOM for the first time.  It won't be called on re-renders.
  componentWillMount() {
    //console.log('this would be a good time to call an action creator to fetch posts');
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

// below is a shortcut for mapDispatchToProps and fetchPosts is the same as fetchPosts: fetchPosts
export default connect(null, { fetchPosts })(PostsIndex);