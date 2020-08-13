import React, { useEffect,useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey ;

function App() {
  const [newsArticles , setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadLines") {
          setNewsArticles(articles)
          console.log(articles)
        }
      },
    });
  }, []);


  return (
    <div>
      <h1>Alan Ai news application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
