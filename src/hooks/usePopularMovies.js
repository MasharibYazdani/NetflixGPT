import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/cosntant";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
