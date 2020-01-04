import ndjsonStream from 'can-ndjson-stream';

export const actions = {
    FETCH_GIF_SUCCESS: "FETCH_GIF_SUCCESS",
    FETCH_GIF_ERROR: "FETCH_GIF_ERROR"
}

export function fetchGif(keyword="cat", offset=0, limit=10) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=nHEBht0IR1V7aX3ggrrujcuVn7fTgmNQ&q=${keyword}&limit=${limit}&offset=${offset}&rating=G&lang=en`;
    const requestOptions = {
        method: 'GET',
    };
    return fetch(url, requestOptions)
    .then((response)=>{ return response.json()})
    .then((res)=> {
        return {
            type: actions.FETCH_GIF_SUCCESS,
            payload: res.data
        }
    })
    .catch(err => {
        return {
            type: actions.FETCH_GIF_ERROR,
            payload: err
        }
    });
}