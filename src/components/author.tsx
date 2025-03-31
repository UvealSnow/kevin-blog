import React from 'react'

export interface Author {
  name: string
  avatar: string
  bio: string
  uri: string
}

const AuthorComponent = ({ author }: { author: Author })  => {
  return (
    <div className='author flex flex-row items-center gap-4'>
      <img
        className='rounded-full w-10 h-10'
        src={author.avatar}
        alt={author.name}
      />

      <div className="flex flex-col justify-center">
        <p className='text-sm font-bold'>{author.name}</p>
        <p className='text-xs'>{author.bio}</p>
      </div>
    </div>
  )
}

export default AuthorComponent
