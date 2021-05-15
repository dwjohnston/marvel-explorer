import styled from 'styled-components';
import { MEDIA_QUERY_IS_DESKTOP } from '../../theme/theme';

export const StyledHome = styled.div`
 
    //What is the best way to do this anyway? 
    // Seems like the simplest thing to me these days.
    position: fixed; 
    left:0;
    top:0;
    right:0;
    bottom:0;
    overflow:auto;

    display: flex; 
    flex-flow: column nowrap; 

    .main {
        flex: 1 0 auto;
    }

    .dj-marvel-selected-character-panel {
        display:none;
        &.character-selected{
            display: block; 
        }
    }

    .dj-marvel-character-listing.character-selected {
        display: none;
    }

    


${MEDIA_QUERY_IS_DESKTOP} {

    .main {
        display: flex; 
        flex-flow: row nowrap; 
    }

    .dj-marvel-character-listing {
        flex: 1 1 auto;
    }

    .dj-marvel-selected-character-panel {
        display: block;
        flex: 0 0 500px; 
    }

    .dj-marvel-character-listing.character-selected {
        display: block; 
    }

}

`;
