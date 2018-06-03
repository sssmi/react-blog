import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../Layout/Layout';
import PostFeedItem from '../Posts/PostFeed/PostFeedItem/PostFeedItem';

class UserPage extends Component {
  render() {
    return (
      <Layout>
        <h2>My page</h2>
        {this.props.posts.map(post => <PostFeedItem key={post.id} {...post} />)}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.user.myPosts,
});

export default connect(mapStateToProps)(UserPage);