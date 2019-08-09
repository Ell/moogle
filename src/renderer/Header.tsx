import * as React from 'react';

import styled from 'src/renderer/theme';

const HeaderContainer = styled('div')`
  height: 35px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Header</h1>
    </HeaderContainer>
  )
}