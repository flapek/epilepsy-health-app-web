import { withRouter } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { paths } from "../../common/Common";

const HomeListItem = withRouter(({ history }) => (
    <ListItem button onClick={() => history.push(paths.home.path) }>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
));

export default HomeListItem;