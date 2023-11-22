import "./AllNews.css"
import Article from "../Article/Article"

function AllNews({allArticles}) {
  console.log("all", allArticles)
  const articleElements = allArticles.map((article) => {
    return <Article key={article.title} article={article}/>
  })
  return (
 <div>{articleElements}</div>   
  )
}

export default AllNews