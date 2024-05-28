import { useDispatch } from "react-redux";
import { GEMINI_KEY, options } from "../utils/cosntant";
import { addGptMovieNames, addGptMoviesResult } from "../utils/gptSlice";

const useSearchMovie = () => {
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const searchMovieResult = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
      options
    );
    const json = await searchMovieResult.json();
    return json?.results;
  };

  const handleGPTSearch = async (query) => {
    try {
      const gptQuery =
        "Act as movie recommendation system and suggest some movies for the query: " +
        query +
        ". Only give me names of 5 movies, comma separated like the example result given ahead.Example Result: Dilwale, Don, Pathaan, Dunki, Singham";

      const gptResult = await fetch(GEMINI_KEY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: gptQuery }] }],
        }),
      });

      const json = await gptResult.json();

      console.log(json);
      const gptMovies =
        json?.candidates[0]?.content?.parts[0]?.text.split(", ");

      dispatch(addGptMovieNames(gptMovies));

      const promiseArray = gptMovies.map((movie) => searchMovie(movie));
      const tmdbResult = await Promise.all(promiseArray);

      dispatch(addGptMoviesResult(tmdbResult));
    } catch (err) {
      console.log(err);
    }
  };

  return { handleGPTSearch };
};

export default useSearchMovie;
