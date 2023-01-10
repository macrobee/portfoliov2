import styled from 'styled-components';

import { themeColors } from '../../colors/colors';

export const NavBar = styled.div`
border-left: 10px solid ${themeColors.text};
position: fixed;
right: 20px;
top:40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
` 