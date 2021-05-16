import styled from 'styled-components';
import { COLOR_RED } from '../../theme/theme';

export const StyledErrorMessage = styled.div`
    border: solid 2px ${COLOR_RED}; 
    color: ${COLOR_RED}; 
    text-align: center; 
    padding: 1em;
    margin: 1em 2em;
`;
