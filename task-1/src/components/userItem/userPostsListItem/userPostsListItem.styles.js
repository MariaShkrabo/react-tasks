import styled from "styled-components";

export const PostsItemContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #7C005A;
    padding: 10px 0;
    flex-direction: column;
    gap: 5px;
    background-color: white;

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

export const PostsItemTitle = styled.h1`
    font-size: 9px;
    width: 80%;
    padding: 5px;
    text-align: center;
    border: 2px solid #7C005A;
    background-color: #F39DDC;
`

export const PostsItemBody = styled.p`
    font-size: 7px;
    width: 80%;
    padding: 5px;
    text-align: center;
    border: 2px solid #7C005A;
    background-color: #FDCCEF;
`