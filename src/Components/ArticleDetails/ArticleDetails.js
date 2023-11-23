import "./ArticleDetails.css"
import { useParams } from "react-router-dom"

function ArticleDetails({allArticles}) {
  console.log("inside art details", allArticles)

  const {id}= useParams()

  const locatedArticle = () => {
    return allArticles.find((article) => article.publishedAt === id)
  }

// console.log("found", locatedArticle())

  return (
    <div>
    </div>
  )
}

export default ArticleDetails