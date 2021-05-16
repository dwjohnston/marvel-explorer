import { string } from "yargs";
import { MarvelCharacter } from "../types/MarvelCharacter";

export function getLargestImage(
  thumbnail: MarvelCharacter["thumbnail"]
): string | null {
  if (thumbnail.path.includes("image_not_available")) {
    return null;
  }

  //TODO sort out filtering the images
  return `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;
}
