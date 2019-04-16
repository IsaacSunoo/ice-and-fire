import * as actions from '../actions';

export const getHouseData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/houses');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const houseData = await response.json();
            dispatch(setHouses(houseData));
        } catch (error) {
            dispatch(hasError(error.message));
        }
    }
}