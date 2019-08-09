import * as React from 'react';

import { ThemeProvider } from 'emotion-theming';

import styled from './theme';
import { GlobalStyles } from './theme/GlobalStyles';
import { Sidebar } from './Sidebar';
import { defaultTheme } from './theme/themes/default';
import { Statusbar } from './Statusbar';

const AppContainer = styled('div')`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Content = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <GlobalStyles />
        <AppContainer>
          <Content>
            <Sidebar />
          </Content>
          <Statusbar />
        </AppContainer>
      </React.Fragment>
    </ThemeProvider >
  )
};

export default App;
