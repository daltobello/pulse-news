import "./Article.css"
import formatPublishedDate from "../../utilsHelper"
import {Link} from "react-router-dom"

function Article({article}) {
  return (
    <Link className="article-link-wrapper" to={`/article/${article.publishedAt}`}>
    <article className="article-container">
      <p className="article-date">Published on: {formatPublishedDate(article.publishedAt)}</p>
      {/* <p className="article-source">{article.source.name}</p> */}
      <h2 className="article-headline">{article.title}</h2>
      <h3 className="article-description">{article.description}</h3>
    </article>
    <img className="article-image" src={article.urlToImage} alt={`Image of ${article.title}`}/>
  </Link>
  )
}

export default Article