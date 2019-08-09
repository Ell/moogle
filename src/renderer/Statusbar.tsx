import * as React from 'react';

import styled from 'src/renderer/theme';

const StatusbarContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const Statusbar: React.FC = () => {
  return (
    <StatusbarContainer />
  )
}