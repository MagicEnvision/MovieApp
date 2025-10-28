export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.API_MOVIE_READ_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_MOVIE_READ_KEY}`

    }
}

export const fetchMovies = async({ query }: {query: string}) =>{

    const endpoint = query
    ? `${TMDB_CONFIG}/search/movie?query=${encodeURIComponent(query)}` :
    `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_bypopularity.desc`

    const response = await fetch(endpoint , {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if(!response){
        console.log("not working")

        throw new Error('failed to fetch movies')
    }

    const data = await response.json();

    return data.results;
}

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