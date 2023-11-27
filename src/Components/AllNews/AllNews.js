import "./AllNews.css"
import Article from "../Article/Article"
import PropTypes from "prop-types"

function AllNews({allArticles}) {
  const articleCard = allArticles.map((article, index) => {
    return <Article key={article.publishedAt} article={article} index={allArticles.indexOf(article)}/>
  })
  return (
 <div className="articles-wrapper">{articleCard}</div>   
  )
}

export default AllNews
AllNews.propTypes = {
  allArticles: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      description: PropTypes.string,
      publishedAt: PropTypes.string,
      source: PropTypes.object,
      title: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string
    }).isRequired
  )
}

