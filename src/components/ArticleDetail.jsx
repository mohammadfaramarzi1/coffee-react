import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesProvider";
import Loader from "./Loader";

function ArticleDetail() {
  const { id } = useParams();
  const artciles = useContext(ArticlesContext);
  const mainArticle = artciles.find((artcile) => artcile.id === id);

  return <div>{mainArticle ? (
    <div className="container my-8">
      <h2 className="text-2xl">{mainArticle.title}</h2>
      <img className="my-5 w-full rounded-lg" src={mainArticle.img} alt={mainArticle.title} />
      <div className="border border-brown-dark p-3 rounded-md">
        <h3 className="text-brown-medium text-xl">توضیحات:</h3>
        <p className="text-lg text-justify">{mainArticle.desc}</p>
      </div>
      <p className="mt-5">تایخ انتشار: <span className="text-brown-medium">{mainArticle.createdAt}</span></p>
    </div>
  ) : <Loader />}</div>;
}

export default ArticleDetail;
