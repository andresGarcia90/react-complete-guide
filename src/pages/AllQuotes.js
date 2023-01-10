import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Person 1', text: 'Text 1' },
  { id: 'q2', author: 'Person 2', text: 'Text 2' },
  { id: 'q3', author: 'Person 3', text: 'Text 3' },
];
function AllQuotes() {

  return <QuoteList quotes={DUMMY_QUOTES}/>;
}

export default AllQuotes;
