import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
}));

export function DefaultPage({ children }: {children: React.ReactNode}) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                {children}
            </main>
        </div>
    )
}