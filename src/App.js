import React, { useEffect,useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "c5f1ccf350945de2516d9a6d682d0a742e956eca572e1d8b807a3e2338fdd0dc/stage";

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
