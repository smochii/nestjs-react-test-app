import React from "react";
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import theme from '../../styles/theme'

export interface CommonTemplateProps {
  children: React.ReactNode;
}

const CommonTemplate: React.FC<CommonTemplateProps> = ({
  children
}) => {
  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default CommonTemplate;