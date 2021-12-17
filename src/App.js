import { React, Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './MainPage/MainPage.jsx';
import RecommendPage from './RecommendPage/RecommendPage.jsx';
import ResearchPage from './ResearchPage/ResearchPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} exact/>
        <Route path="/search" element={<ResearchPage />} exact/>
        <Route path="/recommend" element={<RecommendPage />} exact/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
