import "./AllNews.css"
import Article from "../Article/Article"

function AllNews({allArticles}) {
  console.log("all", allArticles)
  const articleCard = allArticles.map((article, index) => {
    return <Article key={article.publishedAt} article={article} index={allArticles.indexOf(article)}/>
  })
  return (
 <div className="articles-wrapper">{articleCard}</div>   
  )
}

export default AllNews