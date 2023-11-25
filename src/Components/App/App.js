import './App.css';
import {useEffect, useState} from "react"
import getNews from '../../apiCalls';
import { data } from "../../Data/data"
import AllNews from '../AllNews/AllNews';
import {Routes, Route} from "react-router-dom"
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Nav from '../Nav/Nav';

function App() {
  const [articles, setArticles] = useState([])
  const [searchResults, setSearchResults] = useState([])

  // useEffect(() => {
  //   const articlesWithImg = articles.filter(article => article.urlToImage);
  //   console.log("articlessss", articlesWithImg);
  //   setArticles(articlesWithImg);
  // }, []);

  useEffect(() => {
    getNews()
    .then(data => {
      const articlesWithImg = data.articles.filter(article => article.urlToImage)
      // console.log(articlesWithImg)
      setArticles(articlesWithImg)
    })
  }, [])

  useEffect(() => {
    setSearchResults(articles)
  }, [articles])

  const handleNewsSearch = (query) => {
    if (!query) {
      setSearchResults(articles);
    } else {
      const keyword = query.toLowerCase();
      setSearchResults(prevArticles =>
        prevArticles.filter(article =>
          article.author?.toLowerCase().includes(keyword) ||
          article.content?.toLowerCase().includes(keyword) ||
          article.description?.toLowerCase().includes(keyword) ||
          article.title?.toLowerCase().includes(keyword)
        ))
    }
  }

  return (
    <div className="App">
      <header>
      <Nav handleNewsSearch={handleNewsSearch}/>
      </header>
      <Routes>
        <Route path="/" element={<AllNews allArticles={searchResults}/>}/> 
        <Route path="/article/:id" element={<ArticleDetails allArticles={searchResults}/>}/>
      </Routes>
    </div>
  );
}

export default App;
