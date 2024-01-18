// Importa le librerie necessarie
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

interface Article {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
}

const ArticlePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Errore nel recupero degli articoli:", error);
      }
    };

    fetchArticles();
  }, []);

  if (!Array.isArray(articles)) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <div className="article-page">
      <h1>Ultimi Articoli</h1>
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
