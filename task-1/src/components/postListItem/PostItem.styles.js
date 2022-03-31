import styled from "styled-components";

export const PostItemContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #7C005A;
    padding: 10px 0;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        border: 2px solid #37A110;

        h1{
            border: 2px solid #37A110;
            background-color: #A0F08E;
        }

        p{
            border: 2px solid #37A110;
            background-color: #C3F0B4;
        }
    }
`

export const PostTitle = styled.h1`
    width: 90%;
    font-size: 20px;
    padding: 5px;
    text-align: center;
    border: 2px solid #7C005A;
    background-color: #F39DDC;
`

export const PostBody = styled.p`
    width: 90%;
    font-size: 17px;
    padding: 5px;
    border: 2px solid #7C005A;
    background-color: #FDCCEF;
`
