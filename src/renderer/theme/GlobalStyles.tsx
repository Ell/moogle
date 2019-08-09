import * as React from 'react';

import { Reset } from './Reset';
import { Typography } from './Typography';

export const GlobalStyles: React.FC = () => {
  return (
    <React.Fragment>
      <Reset />
      <Typography />
    </React.Fragment>
  )
}