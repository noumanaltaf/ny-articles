import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

const articlesData = [
  { id: 1, title: 'Article 1', content: 'Content of Article 1' },
  { id: 2, title: 'Article 2', content: 'Content of Article 2' },
  { id: 3, title: 'Article 3', content: 'Content of Article 3' },
];


function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article);
  };

  return (
    <div className="App">
      <div className="left-panel">
        <ArticleList articles={articlesData} onArticleClick={handleArticleClick} />
      </div>
      <div className="right-panel">
        {selectedArticle ? <ArticleDetail article={selectedArticle} /> : <p>Select an article to read</p>}
      </div>
    </div>
  );
}

export default App;
