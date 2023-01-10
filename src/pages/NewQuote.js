import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'

function NewQuote() {
  const addQuoteHandle = data => {
    console.log(data)

  }


  return (
    <QuoteForm onAddQuote={addQuoteHandle}/>
  )
}

export default NewQuote