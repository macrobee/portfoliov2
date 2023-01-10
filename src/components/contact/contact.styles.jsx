import styled from 'styled-components';

import { themeColors } from '../../colors/colors';

import { LinkText } from '../projects/projectlist.styles';

export const ContactContainer = styled.div`
border-radius: 1rem;
border: 2px solid ${themeColors.text};
padding: 2rem;
`

export const ConnectText = styled.h2`
font-size: 2rem;
padding: 1rem;
border-radius: 1rem;
border: 2px solid ${themeColors.text};
`

export const ConnectLinkText = styled(LinkText)`
gap: 0.5rem;
`