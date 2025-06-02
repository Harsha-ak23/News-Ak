import { useEffect, useState } from "react"
import NewsItems from "./NewsItems";

 const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data => setArticles(data.articles));
    },[category])
  return (
    <>
    <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    {articles.map((news, index)=>{
        return <NewsItems key={index} title={news.title} discription={news.discription} image={news.urlToImage} url={news.url}/>
    })}
    </>
  )
}
export default NewsBoard