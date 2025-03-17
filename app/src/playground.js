// in playground.js...
import { getTrendingGifs, getGifsBySearch } from "./adapters/giphyAdapters.js";

const testAdapters = async () => {
  const trendingTuple = await getTrendingGifs();
  const searchTuple = await getGifsBySearch();

  console.log(trendingTuple);
  console.log(searchTuple);
};

testAdapters();
