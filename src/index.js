// import axios here
const axios = require('axios');

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  return axios.request(url);
  // code here
}
discoverMovie();

const getMovieById = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  const response = await axios(url)
    .then(response => response.data)
    .then(data => {
      return data;
    });
    return response;
  // code here
}

getMovieById(500);

const getMovieByIdFailure = async () => {
  const fakeId = 5798 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  const response = await axios(url)
    .then(response => response.data)
    .then(data => {
      return data;
    })
    .catch(error => {
      return error.response.status;
    })
    return response;
  // code here
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}