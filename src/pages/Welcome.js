import React from 'react'
import { Outlet } from 'react-router-dom'

function Welcome() {
  return (
    <section>
      <div>Welcome</div>
      <Outlet />
    </section>
  )
}

export default Welcome