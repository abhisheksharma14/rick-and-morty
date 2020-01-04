// default reducer
// Note: You can remove this reducer and create your own reducer

import { actions } from '../actions';

export default (state = { characters:[] }, action) => {
    switch(action.type) {
        case actions.FETCH_CHARACTERS_SUCCESS:
            return {...state, characters: action.payload }
        case actions.FETCH_CHARACTERS_ERROR:
                return {...state, error: actions.payload }
        default:
            return state;
    }
}