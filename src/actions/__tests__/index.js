import * as actions from '../index';

describe('actions', () => {
    describe('setHouses', () => {
        it('should return a type of SET_HOUSES with the houses data', () => {
            const mockHouses = [
                { id: '1', data: 'Lannister' },
                { id: '2', data: 'Stark' },
                { id: '3', data: 'Targaryen' }
            ]
            const expected = {
                type: 'SET_HOUSES',
                houses: mockHouses
            }
            const result = actions.setHouses(mockHouses);
            expect(result).toEqual(expected);
        });

    });

    describe('setLoading', () => {
        it('should return an object with SET_LOADING and isLoading as true', () => {
            const expected = { type: 'SET_LOADING', loading: true };
            const results = actions.setLoading(true);
            expect(results).toEqual(expected);
        });

        it('should return an object with setLoading and isLoading is false', () => {
            const expected = { type: 'SET_LOADING', loading: false };
            const results = actions.setLoading(false);
            expect(results).toEqual(expected);
        });
    });

    describe('setError', () => {
        it('should return a type of hasError with an error message', () => {
            const mockError = 'There was an error.';
            const expected = { type: 'SET_ERROR', message: mockError };
            const result = actions.setError(mockError);
            expect(result).toEqual(expected);
        });
    });
})