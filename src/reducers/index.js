import { SET_MOVIES, SET_LOADING_OFF } from "../constants";

const initialValues = {
    isLoading: true,
    movies: []
};

export const moviesReducer = (state = initialValues, action) => {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                ...state,
                movies: action.payload
            };
        }
        case SET_LOADING_OFF: {
            return {
                ...state,
                isLoading: false
            };
        }
        default: {
            return state;
        }
    }
}
