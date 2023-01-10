import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewQuote from './pages/NewQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import NoFound from './pages/No-Found';

function App() {
  return (
    <>
     <Layout />
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" replace />} />
        <Route index path="/quotes" element={<AllQuotes />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="/no-found" element={<NoFound />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="*" element={<AllQuotes />} />
      </Routes>
    </>
  );
}

export default App;
