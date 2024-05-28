import React, { useRef } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
// import { options } from "../utils/cosntant";

const GPTInputBox = () => {
  const searchText = useRef(null);

  const { handleGPTSearch } = useSearchMovie();

  const handleGPTSearchClick = () => {
    const query = searchText.current.value;
    handleGPTSearch(query);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What would you like to watch today? "
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTInputBox;
