import React from "react";

import TopNavigation from "./components/TopNavigation";
import ScrollPage from "./pages/ScrollPage"
import ModalLocation from './components/ModalLocation' 


import Container from "@material-ui/core/Container";

import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useDispatch } from "react-redux";
import {getListDate, getDefaultData} from './action'



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
    dispatch(getDefaultData());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Container maxWidth="xl" style={{ padding: "0" }}>
          <TopNavigation />
          <ScrollPage/>
          <ModalLocation/>
        </Container>
      </div>
    </ThemeProvider>
  );
}
