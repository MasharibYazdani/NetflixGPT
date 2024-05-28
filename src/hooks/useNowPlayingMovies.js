import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/cosntant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
