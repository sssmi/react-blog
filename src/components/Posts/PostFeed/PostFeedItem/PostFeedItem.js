import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';

const PostFeedItem = ({
  id, author, title, body, createdAt, likes, comments, tags, uid, auth,
}) => {
  const renderTags = () => tags.map(tag => <span key={tag}>{tag} </span>);
  return (
    <div>
      <h2>
        <Link to={`/user/${uid}/${id}`}>{title}</Link>
      </h2>
      <h3>
        <Link to={`/user/${uid}`}>{author}</Link>
      </h3>
      <h4>{moment(createdAt).format('ddd MMM Do YYYY @ HH:mm ')}</h4>
      <p>{body}</p>
      <div>
        <span>likes: {likes}</span> <span>comments: {comments}</span>
      </div>
      {tags && <div>tags: {renderTags()} </div>}
      {auth && uid === auth.uid && <Link to={`/edit/${id}`}>Edit</Link>}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PostFeedItem);
