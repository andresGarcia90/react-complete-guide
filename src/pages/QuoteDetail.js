import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'John Doe 1', text: 'Text Random #1' },
  { id: 'q2', author: 'John Doe 2', text: 'Text Random #2' },
  { id: 'q3', author: 'John Doe 3', text: 'Text Random #3' },
];
function QuoteDetail() {
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);
  if (!quote) {
    return <Link to={'/no-found'} />;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
      <Outlet />
    </>
  )
}

export default QuoteDetail