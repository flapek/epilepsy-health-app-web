import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NoteIcon from '@material-ui/icons/Note';
import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, FormControl, IconButton, Input, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { DefaultPage } from './DefaultPage';

const useStyles = makeStyles((theme) => ({
  listRoot: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
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
    alignItems: 'center'
  }
}));

const initialPosts = [
  {
    id: 1,
    text: 'Lorem ipsum',
    date: '02.10.2021'
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet',
    date: '02.10.2021'
  },
  {
    id: 3,
    text: 'Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    id: 4,
    text: 'Nunc sit amet',
    date: '02.10.2021'
  },
  {
    id: 5,
    text: 'Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    id: 6,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    id: 7,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
  {
    id: 8,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur dui. Ut auctor suscipit lorem, id luctus velit lacinia sed.',
    date: '02.10.2021'
  },
]

export default function Notes() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [posts, setPosts] = useState(initialPosts);
  let [post, setPost] = useState({
    id: 0,
    text: '',
    date: ''
  });

  const createPost = () => ({id: posts.length, text: '', date: ''});
  
  const itemClick = (id: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPost(posts[id]);
  }

  const addNote = () => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newPost = createPost()
    setPosts([...posts, newPost]);
  }

  function handleChange(event) {
    setPost(event.target.value);
  }

  return (
    <DefaultPage>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <Paper className={fixedHeightPaper}>
              <List className={classes.listRoot}>
                <ListSubheader className={classes.headContainer}>
                    <Typography>
                      Notes
                    </Typography>
                    <IconButton edge="end" onClick={addNote()}> 
                      <NoteAddIcon/>
                    </IconButton>
                </ListSubheader>
                {posts.map(item=> (
                  <ListItem key={item.id} button onClick={ itemClick(item.id)}>
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
            <Paper className={fixedHeightPaper}>
              <form autoComplete="off" noValidate>
                <Card>
                  <CardHeader subheader={post.date} title="Note"/>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Input id="my-input" multiline disableUnderline 
                      autoFocus value={post.text} onChange={handleChange} />
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box>
                    <Button color="primary" variant="contained">
                      Save
                    </Button>
                  </Box>
                </Card>
              </form>

              <FormControl>
              </FormControl>            
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </DefaultPage>
  );
}