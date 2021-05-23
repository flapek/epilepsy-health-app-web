import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NoteIcon from '@material-ui/icons/Note';import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    [theme.breakpoints.down('sm')]: {
      height: 360,
    },
    [theme.breakpoints.up('md')]: {
      height: 360,
    },
    [theme.breakpoints.up('lg')]: {
      height: '70vh',
    },
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px',
    alignItems: 'center'
  }
}));

const initialPosts = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
]

export default function Notes() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [posts, setPost] = useState(initialPosts);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Grid container className={classes.headContainer}>
                  <Typography>
                    Notes
                  </Typography>
                  <IconButton edge="end"> 
                    <NoteAddIcon/>
                  </IconButton>
                </Grid>
                <Divider/>
                <List>
                  {posts.map(item => (
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <NoteIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={`${item.text.substr(0, 45)}...`} secondary={item.date} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Paper className={classes.paper}>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}