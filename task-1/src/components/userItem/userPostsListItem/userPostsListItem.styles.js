import styled from "styled-components";
import { MAIN_COLOR, TITLES_BACKGROUND_COLOR, ADD_INFO_BACKGROUND_COLOR, TITLES_POINTER_BACKGROUND_COLOR, MAIN_POINTER_COLOR, ADD_INFO_POINTER_BACKGROUND_COLOR } from "../../../constants/colors";

export const PostsItemContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${MAIN_COLOR};
    padding: 10px 0;
    flex-direction: column;
    gap: 5px;
    background-color: white;

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

export const PostsItemTitle = styled.h1`
    font-size: 9px;
    width: 80%;
    padding: 5px;
    text-align: center;
    border: 2px solid ${MAIN_COLOR};
    background-color: ${TITLES_BACKGROUND_COLOR};
`

export const PostsItemBody = styled.p`
    font-size: 7px;
    width: 80%;
    padding: 5px;
    text-align: center;
    border: 2px solid ${MAIN_COLOR};
    background-color: ${ADD_INFO_BACKGROUND_COLOR};
`