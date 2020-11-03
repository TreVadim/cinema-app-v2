import axios from "axios";
import { SESSIONS_URL, ROOMS_URL, SET_ROOMS, SET_SESSIONS } from "../constants";

const setSessions = (payload) => ({ type: SET_SESSIONS, payload });
const setRooms = (payload) => ({ type: SET_ROOMS, payload });

export const getSessionData = () => {
    return (dispatch) => {
        Promise.all([axios.get(SESSIONS_URL), axios.get(ROOMS_URL)])
            .then((data) => {console.log(data)})
            .catch((error) => {console.log(error)});
    }
}
