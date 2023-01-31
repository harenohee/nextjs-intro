// import NavBar from "components/NavBar";
import Seo from "@/components/Seo";
import { useState, useEffect } from "react";
const API_KEY = "d1a1c244c551297374694671a4b518e2";
export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    // 즉시실행 함수
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log("data:", results);
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
