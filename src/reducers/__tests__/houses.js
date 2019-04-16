import { houses } from '../houses';
import * as actions from '../../actions';

describe('houses', () => {
    it('should return initial state', () => {
        const expected = [];
        const result = houses(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return an array to global state for houses', () => {
        const action = actions.setHouses(['Dragon']);
        const initialState = [];
        const expected = ['Dragon'];

        const result = houses(initialState, action);
        expect(result).toEqual(expected);
    });
})