import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <ul>
      <li><Link to='/products/Book'> Book</Link></li>
      <li><Link to='/products/Storage'> Storage</Link></li>
      <li><Link to='/products/Computer'> Computer</Link></li>
    </ul>
  )
}

export default Products