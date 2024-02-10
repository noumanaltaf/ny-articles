import React, { useState } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import { IArticle } from './api/types';

function App() {
  const [selectedArticle, setSelectedArticle] = useState<IArticle>();

  const handleArticleClick = React.useCallback(
    (article: any) => {
      setSelectedArticle(article);
    },
    []
  );

  return (
    <div className="App">
      <div data-testid="article-list-panel" className="left-panel">
        <ArticleList onArticleClick={handleArticleClick} />
      </div>
      <div data-testid='article-detail-panel' className="right-panel">
        {selectedArticle ? <ArticleDetail article={selectedArticle} /> : <p>Select an article to read</p>}
      </div>
    </div>
  );
}

export default App;
