import { SET_ROOMS, SET_SESSIONS } from "../constants";

const initialValues = {
    sessions: [],
    rooms: [],
    isLoading: true
};

export const sessionsReducer = (state = initialValues, action) => {
    switch (action.type) {
        case SET_SESSIONS: {
            // сортируем массив по дате
            const sortedArr = action.payload.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)) {
                    return 1;
                }
                
                if (new Date(a.date) < new Date(b.date)) {
                    return -1;
                }
                
                return 0;
            });

            const result = sortedArr.reduce((acc, item) => {
                if (!acc.length) {
                    acc.push([]);
                }

                const lastElem = acc[acc.length - 1];
                const lastElemDate = lastElem.length
                    ? lastElem[0].date.split("T")[0]
                    : null;
                const itemDate = item.date.split("T")[0];
                const differentDates = +new Date(lastElemDate) !== +new Date(itemDate);

                if (lastElem.length && differentDates) {
                    return [...acc, [item]];
                }

                acc[acc.length-1].push(item);

                return acc;
            }, []);
            
            console.log("result", result);

            return {
                ...state,
                sessions: result,
                isLoading: false
            };
        }
        case SET_ROOMS: {
            return {
                ...state,
                rooms: action.payload
            }
        }
        default: {
            return state;
        }
    }
}