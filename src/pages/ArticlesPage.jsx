import React, { useContext } from "react";
import { ArticlesContext } from "../context/ArticlesProvider";
import ArticleSlider from "../components/ArticleSlider";
import Loader from "../components/Loader";

function ArticlesPage() {
  const articles = useContext(ArticlesContext);

  return (
    <>
      {articles.length ? (
        <div className="container flex flex-wrap my-16 justify-center sm:justify-between gap-y-3 child:ml-[95px] child:sm:ml-0">
          {articles.map((article) => (
            <ArticleSlider key={article.id} {...article} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ArticlesPage;
