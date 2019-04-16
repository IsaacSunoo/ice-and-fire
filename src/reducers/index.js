import { combineReducers } from 'redux';
import { houses } from './houses';
import { loading } from './loading';
import { error } from './error';

export const rootReducer = combineReducers({
    houses,
    isLoading: loading,
    error
});