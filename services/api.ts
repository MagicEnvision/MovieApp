export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.API_MOVIE_READ_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_MOVIE_READ_KEY}`

    }
}

export const fetchMovies = async

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM1MTRmMmQ3YTMzOTE4ZGFmYzQ1MGY2YTY3YWI2MyIsIm5iZiI6MTc1OTQxNDAzNC42MTMsInN1YiI6IjY4ZGU4NzEyM2Q5N2FiOWIxODZkNTIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qs5ooLem_5ki4pzYsgR7M_g59AvdQzS8F9CrHfVqB74'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));