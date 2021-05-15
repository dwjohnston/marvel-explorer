import styled from 'styled-components';
import { COLOR_BLACK, COLOR_WHITE } from '../../theme/theme';

export const StyledCharacterCard = styled.div`
    
    width: 300px; 
    border: dashed 1px red; 
.top-bar, .bottom-bar {
        height: 24px; 
        transform: skewX(-30deg);
        background: ${COLOR_BLACK};    



    }

    .body {
        background: ${COLOR_BLACK};
        color: ${COLOR_WHITE}; 

        height: 100px;
        margin: 0 14px; 
    }



    .top-bar {
        margin-left: 21px; 
        margin-right: 7px; 

    }
    .bottom-bar {
        margin-left: 7px;
        margin-right: 21px; 
    }

`;


//I'm abandoning this approach because you get a yuck little 1px artifact where the body meets the bars
// The calcuation is tan(skewDegrees) * height to get the horizontal offset amount
// Then but then halve it because it's the offset straddles the border. 
// If you wanted to achieve this shape, I would use an SVG. 