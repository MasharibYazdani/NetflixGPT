import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { gptMovieNames, gptMoviesResult } = useSelector((store) => store.gpt);

  if (!gptMovieNames || !gptMoviesResult) return;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80 rounded-lg">
      <div>
        {gptMovieNames.map((movieTitle, index) => (
          <MovieList
            key={movieTitle}
            title={movieTitle}
            movies={gptMoviesResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
