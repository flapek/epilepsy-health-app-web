import { withRouter } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import { paths } from "../../utilities/common";

const NotesListItem = withRouter(({ history }) => (
    <ListItem button onClick={() => history.push(paths.notes.path) }>
      <ListItemIcon>
        <NotesIcon />
      </ListItemIcon>
      <ListItemText primary="Notes" />
    </ListItem>
));

export default NotesListItem;