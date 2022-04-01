import styled from "styled-components";

export const UserItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #7C005A;
    padding: 10px;
    flex-wrap: wrap;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        border: 2px solid #37A110;

        p{
            border: 2px solid #37A110;
            background-color: #A0F08E;
        }
    }
`

export const UserInfoItem = styled.p`
    font-size: 20px;
    padding: 5px 0;
    text-align: center;
    border: 2px solid #7C005A;
    background-color: #F39DDC;
    width: 20%;

    &:last-child{
        width: 30%;
    }
`
