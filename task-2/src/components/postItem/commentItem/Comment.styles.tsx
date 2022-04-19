import styled from "styled-components";
import { MAIN_COLOR, ADD_INFO_BACKGROUND_COLOR } from "../../../constants/colors";

export const CommentContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 2px solid ${MAIN_COLOR};
    background-color: ${ADD_INFO_BACKGROUND_COLOR};
`

export const CommentName = styled.h1`
    font-size: 15px;
`

export const CommentBody = styled.p`
    font-size: 13px;
`

export const CommentEmail = styled.p`
    font-size: 13px;
    font-style: italic;
`
