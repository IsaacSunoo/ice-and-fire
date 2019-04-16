import * as actions from '../actions';

export const getHouses = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/houses');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const houseData = await response.json();
            console.log(houseData)
            dispatch(actions.setLoading(true));
            dispatch(actions.setHouses(houseData));
            dispatch(actions.setLoading(false));
        } catch (err) {
            dispatch(actions.setError(err.message));
        }
    }
}