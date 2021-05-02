import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
    notFound: {
        fontSize: "40px",
        textAlign: "center"
    },
});

export default function NotFound() {
    let location = useLocation();
    const classes = useStyles();

    return (
    <div className={classes.notFound}>
        <h2>404</h2>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
    );
}