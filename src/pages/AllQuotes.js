import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Person 1', text: 'Zebra' },
  { id: 'q2', author: 'Person 2', text: 'Spider' },
  { id: 'q3', author: 'Person 3', text: 'Cobra' },
];
function AllQuotes() {

  return <QuoteList quotes={DUMMY_QUOTES}/>;
}

export default AllQuotes;
