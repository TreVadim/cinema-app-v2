import axios from "axios";
import { BASE_URL, SET_MOVIES, SET_LOADING_OFF } from "../constants";

const setMovies = (data) => ({
    type: SET_MOVIES,
    payload: data
});

const setLoadingOff = () => ({
    type: SET_LOADING_OFF
});

export const getMovies = () => (dispatch) => {
    axios.get(`${BASE_URL}movie`)
        .then(({ data }) => dispatch(setMovies(data.movie)))
        .catch((error) => console.error(error))
        .finally(() => dispatch(setLoadingOff()));
}
