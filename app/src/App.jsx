/* 
GifSearch is a controlled form that sets a search term to find gifs
GifContainer must take the search term and then fetch gifs according from the search/ endpoint

TODO:
- Share the searchTerm state set by the GifSearch form with the GifContainer
*/
import { useState } from "react";
import NavBar from "./components/NavBar";
import GifContainer from "./components/GifContainer";
import GifSearch from "./components/GifSearch";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        {/* don't know how to fix this yet, gonna work on this */}
        {/* <GifSearch onSearch={setSearch} /> */}
        <br />
        <GifContainer search={search} />
      </div>
    </div>
  );
};

export default App;
