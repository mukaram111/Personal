import React from 'react'
import { Link } from "react-router-dom";

import './BuilderStyle.css'

const BuilderSectionOne = () => {
  return (
    <div className='pt-5'>
<div className='BuilderListMain'>
    <ul className='builderSectionOnelist'>
        <li><Link className='builderListItem'>Scenes</Link></li>
        <li><Link className='builderListItem'>Land</Link></li>
        <li><Link to='/Names' className='builderListItem'>Names</Link></li>
        <li><Link className='builderListItem'>Collection</Link></li>
    </ul>
</div>


    </div>
  )
}

export default BuilderSectionOne