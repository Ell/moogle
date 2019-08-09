import * as React from 'react';

import { Global, css } from '@emotion/core';

const typographyStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap');

  font-family: 'Roboto', sans-serif;
`;

export const Typography: React.FC = () => {
  return (
    <React.Fragment>
      <Global styles={typographyStyle} />
    </React.Fragment>
  )
}
