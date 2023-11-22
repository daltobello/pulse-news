import "./Article.css"
import formatPublishedDate from "../../utilsHelper"

function Article({article}) {
  console.log("article in Article comp", article)
  return (
    <section className="article-container">
      <div className="article-preview-container">
      <p className="article-source">{article.source.name}</p>
      <img className="article-image" src={article.urlToImage} alt={`Image of ${article.title}`}/>
      <div className="article-text-container">
        <p className="article-title">{article.title}</p>
        <p className="article-date">Published on: {formatPublishedDate(article.publishedAt)}</p>
      </div>
      </div>
    </section>
  )
}

export default Article