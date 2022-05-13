import React from 'react'
import HomeFooter from '../footers/homeFooter'

import './blog.css'
import BlogSectionOne from './BlogSectionOne'
import BlogSectionThree from './BlogSectionThree'
import BlogSectionTwo from './BlogSectionTwo'

const BlogMain = () => {
  return (
<>
    <BlogSectionOne/>
    <BlogSectionTwo/>
    <BlogSectionThree/>
    <HomeFooter/>
</>
  )
}

export default BlogMain