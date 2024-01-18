import React from "react";

interface ArticleCardProps {
  title: string;
  date: string;
  imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, imageUrl }) => (
  <div className="article-card">
    <img src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <p>{date}</p>
  </div>
);

export default ArticleCard;
