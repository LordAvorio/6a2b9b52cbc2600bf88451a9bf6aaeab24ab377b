import React from "react";

import TopNavigation from "./components/TopNavigation";
import Container from "@material-ui/core/Container";

import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useDispatch } from "react-redux";
import {getListDate} from './action'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f9423a",
    },
    secondary: {
      main: "#a23530",
    },
    background: {
      default: "#e2e4e4",
    },
  },
});

export default function App() {


  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getListDate());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Container maxWidth="xl" style={{ padding: "0" }}>
          <TopNavigation />
        </Container>
      </div>
    </ThemeProvider>
  );
}
