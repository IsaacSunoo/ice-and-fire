import { mapStateToProps, mapDispatchToProps } from '../containers/Houses';
import { getHouses } from '../thunks';

describe('houses', () => {
    describe('mapStateToProps', () => {
        it('returns an object with houses', () => {
            const mockState = {
                houses: ['wolf', 'bird', 'dragon'],
                isLoading: false,
                error: 'error'
            }
            const expectedState = {
                houses: ['wolf', 'bird', 'dragon'],
                isLoading: false
            }

            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expectedState);
        });
    });

    describe('mapDispatchToProps', () => {
        it.skip('calls dispatch with a getHouses action', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = getHouses();

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.getHouses();
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        });
    });
});