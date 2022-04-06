import styled from "styled-components";
import { MAIN_COLOR, TITLES_BACKGROUND_COLOR, ADD_INFO_BACKGROUND_COLOR, MAIN_POINTER_COLOR, TITLES_POINTER_BACKGROUND_COLOR, ADD_INFO_POINTER_BACKGROUND_COLOR } from "../../constants/colors";

export const PostItemContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${MAIN_COLOR};
    padding: 10px 0;
    text-decoration: none;
    color: black;
    gap: 5px;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        border: 2px solid ${MAIN_POINTER_COLOR};

        h1{
            border: 2px solid ${MAIN_POINTER_COLOR};
            background-color: ${TITLES_POINTER_BACKGROUND_COLOR};
        }

        p{
            border: 2px solid ${MAIN_POINTER_COLOR};
            background-color: ${ADD_INFO_POINTER_BACKGROUND_COLOR};
        }
    }
`

export const PostTitle = styled.h1`
    width: 90%;
    font-size: 20px;
    padding: 5px;
    text-align: center;
    border: 2px solid ${MAIN_COLOR};
    background-color: ${TITLES_BACKGROUND_COLOR};
`

export const PostBody = styled.p`
    width: 90%;
    font-size: 17px;
    padding: 5px;
    border: 2px solid ${MAIN_COLOR};
    background-color: ${ADD_INFO_BACKGROUND_COLOR};
`
