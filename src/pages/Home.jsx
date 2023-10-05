import { useFetch } from "../hooks/useFetch";
import ArticleList from "../components/ArticleList";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Loading from "../components/Loading";

function Home() {
  const { dispatch, loading } = useContext(ThemeContext);
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  useEffect(() => {
    dispatch({ type: "CHANGE_PENDING", payload: isPending });
  }, [isPending]);

  if(loading) {
     return <Loading/>
  }

  return <div>{articles && <ArticleList articles={articles} />}</div>;
}

export default Home;
