import React, { useEffect } from "react";

// App component styles
import "./App.css";
import { LoginForm } from "./components/loginForm/loginForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { USER_LOGIN } from "./context/action";
import { Store } from "./context/context";
import MainContainer from "./components/MainContainer";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { createMuiTheme, ThemeProvider, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";





const App = () => {
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            // light: will be calculated from palette.primary.main,
            // main: '#B8336A',
            main: '#A4A5AE',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            // main: '#726da8',
            main: '#ffcad4',
          },
          background: {
            paper: "#9d8189"
          }
        },
      }),
    [prefersDarkMode],
  );
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    },
  }),
);
  const classes = useStyles();
  const globalState = React.useContext(Store) as any;
  const {user} = globalState.state
  const {userDispatch} = globalState.dispatch
  const history = useHistory();
  const login = async(username: string) => {
    userDispatch({type:USER_LOGIN, user:username})
  }

  useEffect(()=>{
    if(user.isAuthenticated){
      history.push('/main')
    }
    else{
      history.push('/login')
    }
  }, [userDispatch, user, history])
  

  return (
    <ThemeProvider theme={theme}>
    <Container className={classes.root} style={{backgroundColor: theme.palette.background.paper}}>      
      <Switch>
        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>
        <Route exact path="/main">
          <MainContainer />
        </Route>
        
      </Switch>
      
    </Container>
    </ThemeProvider>

  );
};

export default App;
