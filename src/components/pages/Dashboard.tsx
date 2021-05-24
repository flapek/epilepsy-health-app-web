import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../Chart';
import { useEffect } from 'react';
import useData from '../../states/useData';
import { DefaultPage } from './DefaultPage';

const useStyles = makeStyles((theme) => ({
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
    height: 360,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const {data, setData} = useData();

  useEffect(() => {
    const interval = setInterval(() => {
      setData(Math.floor(Math.random() * 100));
      console.log(data);
    }, 5000);
    return () => clearInterval(interval);
  }, [data, setData]);

  return (
    <DefaultPage>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaper}>
              <Chart title="Pulse" data={data}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaper}>
              <Chart title="Heart rate" data={data}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </DefaultPage>
  );
}