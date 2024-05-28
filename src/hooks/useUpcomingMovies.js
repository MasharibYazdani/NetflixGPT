import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/cosntant";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
