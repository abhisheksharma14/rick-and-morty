import ndjsonStream from 'can-ndjson-stream';

export const actions = {
    FETCH_CHARACTERS_SUCCESS: "FETCH_CHARACTERS_SUCCESS",
    FETCH_CHARACTERS_ERROR: "FETCH_CHARACTERS_ERROR"
}

export function fetchCharacters(offset=1) {
    let url = `https://rickandmortyapi.com/api/character/?page=${offset}`;
    const requestOptions = {
        method: 'GET',
    };
    return fetch(url, requestOptions)
    .then((response)=>{ return response.json()})
    .then((res)=> {
        return {
            type: actions.FETCH_CHARACTERS_SUCCESS,
            payload: res.results
        }
    })
    .catch(err => {
        return {
            type: actions.FETCH_CHARACTERS_ERROR,
            payload: err
        }
    });
}