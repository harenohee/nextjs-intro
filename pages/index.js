// import NavBar from "components/NavBar";
import Seo from "@/components/Seo";
import { useState, useEffect } from "react";
const API_KEY = "d1a1c244c551297374694671a4b518e2";
export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // 즉시실행 함수
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const json = await res.json();
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">홈 컨텐츠</h1>
    </div>
  );
}
