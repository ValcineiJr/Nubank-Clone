import React from "react";

import { ThemeProvider } from "styled-components/native";

import AppRoutes from "@router/index";

import theme from "@styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
