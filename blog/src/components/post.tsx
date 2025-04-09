import React from 'react'
import AuthorComponent, { Author } from './author'
import { Link } from 'gatsby'

export interface Post {
  uid: string
  uri: string
  title: string
  brief: string
  thumbnail?: string
  date: string
  author: Author
}

const PostComponent = ({ post }: { post: Post }) => {
  return (
    <Link to={`/blog/${post.uri}`}>
      <div className='
        flex flex-col gap-3
        cursor-pointer group
      '>
        <h2 className='
          text-2xl 
          group-hover:text-primary
          active:text-primary
        '>
          {post.title}
        </h2>

        <AuthorComponent author={post.author} />

        {post.thumbnail && <img
          className='rounded-lg w-96'
          src={post.thumbnail}
          alt={post.title}
        />}

        <p className='max-w-2xl mt-4'>{post.brief}</p>
        <p className='text-xs'>Posted at: {post.date}</p>
      </div>
    </Link>
  )
}

export default PostComponent
