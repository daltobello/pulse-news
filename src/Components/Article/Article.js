import "./Article.css"
import formatPublishedDate from "../../utilsHelper"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

function Article({article, index}) {
  return (
    <Link className="article-link-wrapper" to={`/article/${index}`}>
    <article className="article-container">
      <p className="article-date article-copy">Published on: {formatPublishedDate(article.publishedAt)}</p>
      <h2 className="article-headline article-copy">{article.title}</h2>
      <h3 className="article-description article-copy">{article.description}</h3>
    </article>
    <img className="article-image" src={article.urlToImage} alt={`Image of ${article.title}`}/>
  </Link>
  )
}

export default Article
Article.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    source: PropTypes.object,
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};