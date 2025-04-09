import React from 'react'
import PostComponent, { Post }  from './post'

interface PostListProps {
  posts: Post[]
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className='flex flex-col gap-8'>
      {posts.map(post => <PostComponent key={post.uid} post={post} />)}
    </div>
  )
}

export default PostList
