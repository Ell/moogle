import styled, { CreateStyled } from '@emotion/styled-base';

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export default styled as CreateStyled<Theme>;
