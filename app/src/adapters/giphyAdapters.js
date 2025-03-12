/* 
An adapter is a helper function for sending a request to specific endpoint. Here, we have one adapter for fetching from the /trending endpoint and another for fetching from the /search endpoint. 

TODO:
- Import the API Key from your config.js file
- Complete each adapter function to fetch from the trending/ and search/ endpoints. See the README for the complete endpoint URLs that you will be fetching from.
*/
import { handleFetch } from "./handleFetch.js";
import API_KEY from "./config.js";

const baseUrl = "https://api.giphy.com/v1/gifs";

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async () => {
  const url = `${baseUrl}/trending?api_key=${API_KEY}&rating=g`;
  const [data, error] = await handleFetch(url);

  // console.log(data.data[0].images);
  return [data.data.slice(0, 3), error];
};

// Send a fetch request to the /search endpoint with the given term as a query parameter
export const getGifsBySearch = async (term) => {
  const url = `${baseUrl}/search?api_key=${API_KEY}&q=${term}&rating=g`;
  const [data, error] = await handleFetch(url);

  // console.log(data.data[0].images);
  return [data.data, error];
};
