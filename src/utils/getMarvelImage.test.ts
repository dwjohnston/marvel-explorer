import React from 'react';
import { getLargestImage } from './getMarvelImage';

describe('getLargestImage', () => {
    it ("does the right thing for a good image", () => {
        const result = getLargestImage({
            extension: "jpg", 
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784"
        }); 

        expect(result).toBe("http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_incredible.jpg");
    }); 

    it ("returns null if the image is not availble", () => {


        const result = getLargestImage({
            extension: "jpg", 
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
        });


        expect(result).toBe(null);
    });     


});
