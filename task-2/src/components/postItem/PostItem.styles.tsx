import styled from "styled-components";
import { MAIN_COLOR } from "../../constants/colors";
import { PostBody, PostTitle } from "../postListItem/PostListItem.styles";

export const PostContainer = styled.section`
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border: 2px solid ${MAIN_COLOR};
    padding: 15px 0;
`

export const AuthorInfoContainer = styled.section`
    border: 2px solid ${MAIN_COLOR};
    font-style: italic;
    width: 90%;
    padding: 15px;
`

export const AuthorInfoTitle = styled.h1`
    font-size: 13px;
    color: ${MAIN_COLOR};
`

export const AuthorInfoItem = styled.p`
    margin-left: 10px;
    font-size: 12px;
`

export const PostMainInfoContainer = styled.section`
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const PostMainInfoTitle = styled(PostTitle)`
    padding: 15px;
`

export const PostMainInfoBody = styled(PostBody)`
    padding: 15px;
`

export const CommentsContainer = styled.section`
    width: 90%;
    border: 2px solid ${MAIN_COLOR};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    gap: 10px;
`

export const CommentsTitle = styled.h1`
    font-size: 20px;
    color: ${MAIN_COLOR};
    border-bottom: 2px solid ${MAIN_COLOR};
    padding-bottom: 15px;
    margin-bottom: 15px;
`
