import styled from 'styled-components';
import { MAIN_COLOR, TITLES_POINTER_BACKGROUND_COLOR } from '../../constants/colors';

export const WarningContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WarningText = styled.h1`
    font-size: 25px;
    font-weight: 600;
    color: ${MAIN_COLOR};
`;
