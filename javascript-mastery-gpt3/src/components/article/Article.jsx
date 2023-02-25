import React from "react";
import "./article.css";

const Article = ({ image, date, title }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={image} />
      </div>
      <div className="gpt3__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>

        <p>Read more</p>
      </div>
    </div>
  );
};
export default Article;
