import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { paths, routes } from '../common/Common'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Navigation from './navigation/Navigation';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Body = ({ setToken }: {setToken: (userToken: any) => void}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpenClose = () => setOpen(!open);
  
  const HeaderView = () => {
    const location = useLocation();
    switch (location.pathname) {
      case paths.notes.path:
        return paths.notes.displayName
      case paths.dashboard.path:
        return paths.dashboard.displayName
      case paths.account.path:
        return paths.account.displayName
      default:
        return "";
    }
  }

  return (
      <div className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
              <Toolbar className={classes.toolbar}>
              <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpenClose}
                  className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                  <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  {HeaderView()}
              </Typography>
              </Toolbar>
          </AppBar>
          <Drawer
              variant="permanent"
              classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
              }}
              open={open}
          >
              <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerOpenClose}>
                  <ChevronLeftIcon />
              </IconButton>
              </div>
              <Divider />
              <List>
              <Navigation setToken={setToken}/>
              </List>
          </Drawer>
          <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Switch>
                {routes.map(({path, component}, i)=>{
                    return (
                      <Route exact key={i} path={path} component={component}/>
                    );
                })}
              </Switch>
          </main>
      </div>
  );
}

export default Body;