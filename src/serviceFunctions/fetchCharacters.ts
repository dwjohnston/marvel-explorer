import { MarvelCharacter, MarvelRequestResult } from '../types/MarvelCharacter';

const {
    REACT_APP_PUBLIC_KEY,
    REACT_APP_HASH,
    REACT_APP_MARVEL_API_PATH, 
    REACT_APP_TS
} = process.env;

if (!REACT_APP_HASH || !REACT_APP_PUBLIC_KEY || !REACT_APP_MARVEL_API_PATH || !REACT_APP_TS) {
    console.error({    REACT_APP_PUBLIC_KEY,
        REACT_APP_HASH,
        REACT_APP_MARVEL_API_PATH, 
        REACT_APP_TS})
    throw new Error("Env vars were not provided");
}

function parsePayload (data: unknown) : MarvelRequestResult<unknown> {


    // Here we have the opportunity to check that the payload result is what we're actually expecting, before we coerce the type
    return data as MarvelRequestResult<unknown>; 
}

function parseCharacters (data: MarvelRequestResult<unknown>) : MarvelRequestResult<MarvelCharacter> {
    
    // Here we have the opportunity to check that the payload result is what we're actually expecting, before we coerce the type
    return data as MarvelRequestResult<MarvelCharacter>;
}

export async function fetchCharacters(offset = 0): Promise<MarvelRequestResult<MarvelCharacter>> {

    const res = await fetch(`${REACT_APP_MARVEL_API_PATH}/characters?apikey=${REACT_APP_PUBLIC_KEY}&ts=${REACT_APP_TS}&hash=${REACT_APP_HASH}&offset=${offset}`, {

        method: "GET", 
        mode: "cors",
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }

    })
    if (res.status >= 400) {
        throw new Error(res.statusText);
    }

    console.log(res);

    const json = await res.json();

console.log(json);

    const payload = parsePayload(json); 
    const characters = parseCharacters(payload);

    return characters;
}