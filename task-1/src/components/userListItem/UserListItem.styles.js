import styled from "styled-components";
import { MAIN_COLOR, TITLES_BACKGROUND_COLOR, MAIN_POINTER_COLOR, TITLES_POINTER_BACKGROUND_COLOR } from "../../constants/colors";

export const UserItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid ${MAIN_COLOR};
    padding: 10px;
    flex-wrap: wrap;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        border: 2px solid ${MAIN_POINTER_COLOR};

        p{
            border: 2px solid ${MAIN_POINTER_COLOR};
            background-color: ${TITLES_POINTER_BACKGROUND_COLOR};
        }
    }
`

export const UserInfoItem = styled.p`
    font-size: 20px;
    padding: 5px 0;
    text-align: center;
    border: 2px solid ${MAIN_COLOR};
    background-color: ${TITLES_BACKGROUND_COLOR};
    width: 20%;

    &:last-child{
        width: 30%;
    }
`
