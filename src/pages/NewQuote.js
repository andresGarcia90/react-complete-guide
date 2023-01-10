import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'

function NewQuote() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const addQuoteHandle = data => {
    console.log(data)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/quotes')
    }, 2000);

  }


  return (
    <QuoteForm isLoading={isLoading} onAddQuote={addQuoteHandle}/>
  )
}

export default NewQuote