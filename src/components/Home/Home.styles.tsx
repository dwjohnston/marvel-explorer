import styled from 'styled-components';
import { MEDIA_QUERY_IS_DESKTOP } from '../../theme/theme';

export const StyledHome = styled.div`

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
    display: flex; 
    flex-flow: row nowrap; 

    .dj-marvel-selected-character-panel {
        display: block;
        flex: 0 0 500px; 
    }

    .dj-marvel-character-listing.character-selected {
        display: block; 
    }

}

`;
