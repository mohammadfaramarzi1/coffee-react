import React, { createContext, useContext, useEffect, useState } from "react";
import BASE_URL from "../utils/url";

export const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/articles`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <ArticlesContext.Provider value={articles}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;
