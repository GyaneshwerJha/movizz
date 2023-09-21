import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjYwYzAzMjQ5MDYzOThhYTFiNzhmYzgxN2JjNGU4NiIsInN1YiI6IjY1MDQwYjBkZDdkY2QyMDEzOWNjYmI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6OvMZ7rbFngZQJbUGnVa4cm-I1qHfINDo-1_t_agQ8";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}