import styled from "styled-components";
import {
  COLOR_BLACK,
  COLOR_BLACK_2,
  COLOR_RED,
  COLOR_WHITE,
  COLOR_WHITE_2,
  MEDIA_QUERY_IS_DESKTOP,
} from "../../theme/theme";

export const StyledSelectedCharacterPanel = styled.div`
    background-color: ${COLOR_RED};
    position: relative; 
    padding:2em;


    img {
        max-width: 100%; 
        margin: 0 auto;
        display: block;
    }
    .description {
        margin: 8px 32px;
        
    }

    h2 {
        text-align: center; 
    }
    button {
        color: white; 
        border solid 1px white; 
        background: transparent; 
        position: absolute;
        top: 8px; 
        right:8px; 
        border-radius: 8px;

        font-size: 2em;
    }

    ${MEDIA_QUERY_IS_DESKTOP}{
        button {
            display: none;
        }
    }

    .appears-in {
        background-color: ${COLOR_BLACK}; 
        color: ${COLOR_WHITE_2}; 
        margin: 8px; 
        padding: 8px 64px; 
        position: relative; 
        li {
            text-align: left;
        }



        //https://stackoverflow.com/questions/7324722/cut-corners-using-css
        &::before {
            content: '';
            position: absolute;
            top: 0;
             left: 0;
            border-top: 60px solid ${COLOR_RED};
            border-right: 60px solid ${COLOR_BLACK};
            width: 0;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            border-top: 60px solid ${COLOR_BLACK};
            border-right: 60px solid ${COLOR_RED};;
            width: 0;
        }
    }

    .see-also {

        margin-left: 32px;

        a {
            display: block; 
            color: ${COLOR_WHITE};
        }
        a:hover {
            color: ${COLOR_WHITE_2};
        }
    }
`;
