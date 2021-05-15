import styled from 'styled-components';
import { COLOR_BLACK, COLOR_BLACK_2 } from '../../theme/theme';

export const StyledCharacterListing = styled.div`
background-color: ${COLOR_BLACK};

.load-more-button {
    margin-top: 16px; 
    margin-bottom: 16px;
}

    .listing-container {
        display: flex; 
        flex-flow: row wrap;
        justify-content: space-around;

        >* {
            margin: 1em;
        }
    }

`;
