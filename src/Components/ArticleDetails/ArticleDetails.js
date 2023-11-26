// ArticleDetails.js
import React from "react";
import "./ArticleDetails.css";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types"

function ArticleDetails({ allArticles }) {
  const articleID = useParams().id;
  const indexPositions = allArticles.map((articleEl, index) => index);

  // find the index position in indexPositions array that matches the articleID
  const articleIndex = indexPositions.indexOf(parseInt(articleID));

  // check if the articleIndex is valid
  if (articleIndex === -1 || articleIndex >= allArticles.length) {
    console.error(`Article with ID ${articleID} not found`);
    return <p>Article not found</p>;
  }

  const clickedArticle = allArticles[articleIndex];

  return (
    <section className="article-details-container">
      <section className="detail-headline-and-img">
        <h2 className="detail-headline">{clickedArticle.title}</h2>
        <img className="detail-image" src={clickedArticle.urlToImage} alt={`Image of ${clickedArticle.title}`} />
      </section>
      <article className="detail-content">
        <p className="article-content">{clickedArticle.content?.split('[')[0]}<a className="source-link" href={clickedArticle.url}>{`read on at ${clickedArticle.source.name}.`}</a></p>
      </article>
    </section>
  );
}

export default ArticleDetails;
ArticleDetails.propTypes = {
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
