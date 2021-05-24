import { Container, FormControl, FormHelperText, Grid, Input, InputLabel, makeStyles, Paper, TextField  } from "@material-ui/core";
import { DefaultPage } from "./DefaultPage";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
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
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
}));

export default function Account() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <DefaultPage>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={2}>
                    {/* <Grid item xs={8} md={8} lg={8}>
                        <Paper className={fixedHeightPaper}>
                            <form className={classes.root} noValidate>
                                <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                                <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
                                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" />
                            </form>
                        </Paper>
                    </Grid> */}
                    <Grid item xs={8} md={8} lg={8}>
                        <Paper className={fixedHeightPaper}>
                          <FormControl>
                            <InputLabel htmlFor="my-input">Email address</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                          </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </DefaultPage>
    );
}