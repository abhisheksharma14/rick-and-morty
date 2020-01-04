// default reducer
// Note: You can remove this reducer and create your own reducer

import { actions } from '../actions';

export default (state = { gifs:[] }, action) => {
    switch(action.type) {
        case actions.FETCH_GIF_SUCCESS:
            return {...state, gifs: action.payload }
            case actions.FETCH_GIF_ERROR:
                return {...state, error: actions.payload }
        default:
            return state;
    }
}