import React from "react";
import GPTInputBox from "./GPTInputBox";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMG } from "../utils/cosntant";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img src={BG_IMG} alt="bgImage" />
      </div>
      <GPTInputBox />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
