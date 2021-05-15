import { MarvelCharacter } from '../types/MarvelCharacter'

export function getLargestImage(thumbnail: MarvelCharacter['thumbnail']): string | null {


    //TODO sort out filtering the images
    return `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;
}