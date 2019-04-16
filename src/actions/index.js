export const setHouses = houses => ({
    type: 'SET_HOUSES',
    houses
});

export const setLoading = loading => ({
    type: 'SET_LOADING',
    loading
});

export const setError = message => ({
    type: 'SET_ERROR',
    message
});