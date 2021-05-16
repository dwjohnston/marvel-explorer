export type MarvelCharacter = {
  id: number;
  name: string;
  description: string;
  modified?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: MarvelResourceCollection;
  series: MarvelResourceCollection;
  stories: MarvelStoryResourceCollection;
  events: MarvelResourceCollection;
  urls: Array<MarvelUrl>;
};

export type MarvelUrl = {
  type: string; // Possibly narrow the type
  url: string;
};

export type MarvelResourceCollection = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<MarvelResource>;
};

// This is a bit lazy on my part for now - I've just copied this from above, and modifying the Array type
// I could introduce a generic or something later
// But for now I just want to get this going, I'm applying a YAGNI / Copy paste before you build the abstraction principle.
export type MarvelStoryResourceCollection = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
    type: string; // Possibly narrow this type
  }>;
};

export type MarvelResource = {
  resourceURI: string;
  name: string;
};

export type MarvelRequestResult<T> = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHtml: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<T>;
  };
};
