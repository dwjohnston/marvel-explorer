import styled from 'styled-components';
import { COLOR_BLACK, COLOR_BLACK_2 } from '../../theme/theme';

export const StyledCharacterListing = styled.div`
    .listing-container {
        display: flex; 
        flex-flow: row wrap;
        justify-content: space-around;
        background-color: ${COLOR_BLACK};

        >* {
            margin: 1em;
        }
    }

`;
