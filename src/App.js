import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewQuote from './pages/NewQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
     <Layout />
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" replace />} />
        <Route index path="/quotes" element={<AllQuotes />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="*" element={<AllQuotes />} />
      </Routes>
    </>
  );
}

export default App;
