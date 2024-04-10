import * as React from 'react';
import AddPost from './features/post/addPost';
import PostList from './features/post/postList';

export default function Home() {
  return (
      <React.Fragment>
          <AddPost />
          <PostList/>
      </React.Fragment>
  );
}