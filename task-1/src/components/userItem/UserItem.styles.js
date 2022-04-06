import styled from "styled-components";
import { MAIN_COLOR } from "../../constants/colors";

export const UserItemContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid ${MAIN_COLOR};
    padding: 10px;
    gap: 20px;
    width: 90%;
`

export const UserInfo = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 2px solid ${MAIN_COLOR};
    background-color: #FFE2F5;
    padding: 10px;
`

export const UsersPostsList = styled.aside`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    gap: 10px;
    border: 2px solid ${MAIN_COLOR};
    padding: 5px;
    background-color: #FFE2F5;
`

export const UserInfoItem = styled.p`
    width: 100%;
    padding: 3px;
`
