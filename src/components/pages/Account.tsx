import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, makeStyles, TextField  } from "@material-ui/core";
import { DefaultPage } from "./DefaultPage";
import { useContext, useState } from "react";
import { RootStoreContext } from "../../store/rootStore";
import { GetUserIdFromLocalStorage } from "../../utilities/localStorageService";

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
  const store = useContext(RootStoreContext);
  const user = store.userStore.getUserById(GetUserIdFromLocalStorage());
  const [values, setValues] = useState(user);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  
  return (
      <DefaultPage>
          <Container maxWidth="lg" className={classes.container}>
            <form autoComplete="off" noValidate>
              <Card>
                <CardHeader
                  subheader="The information can be edited"
                  title="Profile"
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField fullWidth helperText="Please specify the first name"
                        label="First name" name="firstName" onChange={handleChange}
                        value={values.firstName} variant="outlined"/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField fullWidth label="Last name" name="lastName"
                        onChange={handleChange} value={values.lastName} variant="outlined"/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField fullWidth label="Email Address" name="email" 
                        onChange={handleChange} value={values.email}
                        variant="outlined"/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField fullWidth label="Password" name="password" 
                        onChange={handleChange} value={values.password}
                        variant="outlined" type="password"/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField fullWidth label="Age" name="age" 
                        onChange={handleChange} value={values.age}
                        variant="outlined"/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField fullWidth label="Weight" name="weight" 
                        onChange={handleChange} value={values.weight}
                        variant="outlined"/>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <Box>
                  <Button color="primary" variant="contained">
                    Save details
                  </Button>
                </Box>
              </Card>
            </form>
          </Container>
      </DefaultPage>
  );
}