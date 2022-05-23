import React from 'react';
import { postAPI } from '../../services/PostService';
import PostItem from './PostItem';

const PostsContainer = () => {
  const { error, isLoading, data: posts } = postAPI.useFetchAllPostsQuery(5)
  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>... IS LOADING</h1>}
        {error && <h1> Error... </h1>}
        {posts && posts.map(post => <PostItem key = {post.id} post = {post}/>)}
      </div>
    </div>
  );
};

export default PostsContainer;