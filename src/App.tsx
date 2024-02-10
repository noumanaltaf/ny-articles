import React, { useEffect, useState } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import { fetchMostViewedArticles } from './api/article';
import { Article } from './api/types';

function App() {
  console.log('REACT_APP_BASE_API', process.env)
  const [loading, setLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article>();

  useEffect(
    () => {
      setLoading(true);
      fetchMostViewedArticles()
        .then((response) => {
          if (response?.status === 'OK') {
            setArticles(response.results);
          }
        })
        .catch((err) => console.warn(err))
        .finally(() => setLoading(false));
    },
    []
  );

  const handleArticleClick = React.useCallback(
    (article: any) => {
      setSelectedArticle(article);
    },
    []
  );

  return loading ? (
    <div>loading articles...</div>
  ) : (
    <div className="App">
      <div className="left-panel">
        <ArticleList articles={articles} onArticleClick={handleArticleClick} />
      </div>
      <div className="right-panel">
        {selectedArticle ? <ArticleDetail article={selectedArticle} /> : <p>Select an article to read</p>}
      </div>
    </div>
  );
}

export default App;
