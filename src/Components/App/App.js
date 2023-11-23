import './App.css';
import {useEffect, useState} from "react"
import getNews from '../../apiCalls';
import { data } from "../../Data/data"
import AllNews from '../AllNews/AllNews';
import {Routes, Route} from "react-router-dom"
import ArticleDetails from '../ArticleDetails/ArticleDetails';

function App() {
  const [articles, setArticles] = useState(data.articles)

  useEffect(() => {
    const articlesWithImg = articles.filter(article => article.urlToImage);
    console.log("articlessss", articlesWithImg);
    setArticles(articlesWithImg);
  }, []);

  // useEffect(() => {
  //   getNews()
  //   .then(data => {
  //     const articlesWithImg = data.articles.filter(article => article.urlToImage)
  //     console.log(articlesWithImg)
  //     setArticles(articlesWithImg)
  //   })
  // }, [])


  

  return (
    <div className="App">
      <h1>Pulse News</h1>
      <Routes>
        <Route path="/" element={<AllNews allArticles={articles}/>}/>
        <Route path="/article/:id" element={<ArticleDetails allArticles={articles}/>}/>
      </Routes>
    </div>
  );
}

export default App;
