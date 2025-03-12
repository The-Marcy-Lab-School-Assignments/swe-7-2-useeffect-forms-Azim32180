/* 
This component is meant to display gifs. However, there are two different sets of gifs that this component can display, depending on the user's actions. At first, they should see trending gifs but after submitting a search term in the GifSearch form, they should see gifs related to their search.

TODO:
- use the getTrendingGifs adapter to fetch trending gifs on the first render
- each time the user submits the form in GifSearch, use the getGifsBySearch adapter to fetch gifs according to the search term.
- render the list of fetched gifs (or the defaultGifs) as list items with an `img` inside. Remember to give each list item a unique key!
- Bonus: if at any point an error is returned, render the default gifs again.
*/

import { useState, useEffect } from "react";
import GifSearch from "./GifSearch";
import defaultGifs from "../gifs.json";
import { getGifsBySearch, getTrendingGifs } from "../adapters/giphyAdapters";

const GifContainer = () => {
  const [gifs, setGifs] = useState(defaultGifs);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTrending = async () => {
      const [data, error] = await getTrendingGifs();
      if (error) {
        setError(error);
        setGifs(defaultGifs);
      } else {
        setGifs(data);
      }
    };
    fetchTrending();
  }, []);

  useEffect(() => {
    if (!search) return;

    const fetchSearchResults = async () => {
      const [data, error] = await getGifsBySearch(search);
      if (error) {
        setError(error);
        setGifs(defaultGifs);
      } else {
        setGifs(data);
      }
    };
    fetchSearchResults();
  }, [search]);

  return (
    <div>
      <GifSearch onSearch={setSearch} />
      <ul>
        {gifs.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt="gif" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GifContainer;
