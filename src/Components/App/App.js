import './App.css';
import {useEffect, useState} from "react"
import {Routes, Route} from "react-router-dom"
import getNews from '../../apiCalls';
import { data } from "../../Data/data"
import AllNews from '../AllNews/AllNews';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Nav from '../Nav/Nav';
import ErrorPage from '../ErrorPage/ErrorPage';


function App() {
  const [articles, setArticles] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [serverError, setServerError] = useState("")

  // useEffect(() => {
  //   const articlesWithImg = articles.filter(article => article.urlToImage);
  //   console.log("articlessss", articlesWithImg);
  //   setArticles(articlesWithImg);
  // }, []);

  useEffect(() => {
    getNews()
    .then(data => {
      const articlesWithImg = data.articles.filter(article => article.urlToImage)
      setArticles(articlesWithImg)
    })
    .catch(error => setServerError(error))
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
      {serverError ? (
        <>
        <ErrorPage serverError={serverError}/>
        </>
      ) : (
        <>
        <Routes>
                <Route path="/" element={<AllNews allArticles={searchResults}/>}/> 
                <Route path="/article/:id" element={<ArticleDetails allArticles={searchResults}/>}/>
                <Route path="*" element={<ErrorPage notFoundMessage="Page Not Found. Please double check the URL." />} />
        </Routes>
        </>
      )}
    </div>
  );
}

export default App;
