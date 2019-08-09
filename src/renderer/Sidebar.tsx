import * as React from 'react';

import styled from 'src/renderer/theme';

const SidebarContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer />
  )
}