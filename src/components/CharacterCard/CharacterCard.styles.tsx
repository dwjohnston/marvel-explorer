import styled from 'styled-components';
import { COLOR_BLACK, COLOR_WHITE } from '../../theme/theme';

export const StyledCharacterCard = styled.div`
    
    width: 300px; 
    height: 300px;
    background: linear-gradient(to bottom right, ${COLOR_BLACK} 95%, transparent 95%);


`;


//I'm abandoning this approach because you get a yuck little 1px artifact where the body meets the bars
// The calcuation is tan(skewDegrees) * height to get the horizontal offset amount
// Then but then halve it because it's the offset straddles the border. 
// If you wanted to achieve this shape, I would use an SVG. 