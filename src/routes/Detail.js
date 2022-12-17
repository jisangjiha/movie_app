import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    console.log(json);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div className="container">
      <h1>Detail of "{movies.title}"</h1>
      <img src={movies.medium_cover_image} alt="coverImg" className="img" />
      <div>
        <p>Rating : {movies.rating}</p>
        <p>Genres : {movies.genres}</p>
        <p>Language : {movies.language}</p>
        <p>Year : {movies.year}</p>
      </div>
    </div>
  );
}

export default Detail;
