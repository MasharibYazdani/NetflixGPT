import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { HeaderLOGO, UserICON } from "../utils/cosntant";
import {
  removeGptMovieNames,
  removeGptMoviesResult,
  toggleGPTSearch,
} from "../utils/gptSlice";
import {
  removeNowPlayingMovies,
  removePopularMovies,
  removeTopRated,
  removeTrailerVideo,
  removeUpcomingMovies,
} from "../utils/moviesSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when components unmounts

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(toggleGPTSearch());
        dispatch(removeNowPlayingMovies());
        dispatch(removePopularMovies());
        dispatch(removeTopRated());
        dispatch(removeUpcomingMovies());
        dispatch(removeTrailerVideo());
        dispatch(removeGptMovieNames());
        dispatch(removeGptMoviesResult());

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        {" "}
        <img className="w-48" src={HeaderLOGO} alt="logo" />
      </div>

      {user && (
        <div className="flex p-2">
          <div>
            <button
              onClick={handleGPTSearch}
              className="text-white my-2 p-2 bg-blue-600 rounded-md"
            >
              {showGPTSearch ? "Home" : "GPT Search"}
            </button>
          </div>

          <img
            className="w-10 h-10 rounded-md m-2"
            alt="usericon"
            src={UserICON}
          />

          <div className="">
            <h1 className="text-white">{user.displayName}</h1>
            <button className="text-white font-bold" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
