import './App.css';
import {useEffect, useState} from "react"
import getNewsArticles from './apiCalls';
import { data } from "./Data/data"

function App() {
  const [articles, setArticles] = useState(data)

  useEffect(() => {
    // getNewsArticles()
    console.log(data)
      setArticles(data)
  }, [])

  return (
    <div className="App">
      <h1>Pulse News</h1>
    </div>
  );
}

export default App;
