import "./ArticleDetails.css"
import { useParams } from "react-router-dom"

function ArticleDetails({allArticles}) {
  const articleID = useParams().id
  const clickedArticle = allArticles.find((article) => article.publishedAt === articleID)
  console.log("click", clickedArticle)

  return (
    <section className="article-details-container">
      <section className="detail-headline-and-img">
        <h2 className="detail-headline">{clickedArticle.title}</h2>
        <img className="detail-image" src={clickedArticle.urlToImage} alt={`Image of ${clickedArticle.title}`}/>
      </section>
      <article className="detail-content">
        <p>{clickedArticle.content?.split('[')[0]}<a href={clickedArticle.url}>{`read on at ${clickedArticle.source.name}.`}</a></p>
      </article>
    </section>
  )
}

export default ArticleDetails