import "./Article.css"
import formatPublishedDate from "../../utilsHelper"
import {Link} from "react-router-dom"

function Article({article, index}) {
  console.log("art:", article)
  console.log("index", index)

  return (
    <Link className="article-link-wrapper" to={`/article/${index}`}>
    <article className="article-container">
      <p className="article-date">Published on: {formatPublishedDate(article.publishedAt)}</p>
      <h2 className="article-headline">{article.title}</h2>
      <h3 className="article-description">{article.description}</h3>
    </article>
    <img className="article-image" src={article.urlToImage} alt={`Image of ${article.title}`}/>
  </Link>
  )
}

export default Article