import React from 'react'
import { StyledProfilePosts } from '../Components/ProfileComponents'
import Post from '../Home/Post'

export default function ProfilePosts() {
  return (
    <StyledProfilePosts>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </StyledProfilePosts>
  )
}
