import React from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'John Doe 1', text: 'Text Random #1' },
  { id: 'q2', author: 'John Doe 2', text: 'Text Random #2' },
  { id: 'q3', author: 'John Doe 3', text: 'Text Random #3' },
];
function QuoteDetail() {
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);
  const navigate = useNavigate();
  if (!quote) {
    navigate('/no-found');// Call in a use effects
    return;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
      <Outlet />
    </>
  )
}

export default QuoteDetail