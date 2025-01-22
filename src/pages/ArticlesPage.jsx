import React, { useContext } from "react";
import { ArticlesContext } from "../context/ArticlesProvider";
import ArticleSlider from "../components/ArticleSlider";
import Loader from "../components/Loader";

function ArticlesPage() {
  const articles = useContext(ArticlesContext);
  console.log(articles);

  return (
    <div className="container flex flex-wrap my-16 justify-center gap-3">
      {articles.length ? (
        articles.map((article) => (
          <ArticleSlider key={article.id} {...article} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ArticlesPage;
