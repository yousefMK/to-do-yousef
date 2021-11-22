import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import Layouts from "./components/Layouts";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layouts>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layouts>
      </Router>
    </ThemeProvider>
  );
}

export default App;
