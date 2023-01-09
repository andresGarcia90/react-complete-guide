import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

function QuoteDetail() {
  const { quoteId } = useParams();
  return (
    <>
      <div>QuoteDetail</div>
      <div>{quoteId}</div>
      <Outlet />
    </>
  )
}

export default QuoteDetail