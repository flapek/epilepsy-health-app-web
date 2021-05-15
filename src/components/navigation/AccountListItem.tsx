import { withRouter } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { paths } from "../../common/Common";

const AccountListItem = withRouter(({ history }) => (
  <ListItem button onClick={() => history.push(paths.account.path) }>
    <ListItemIcon>
      <AccountCircleIcon />
    </ListItemIcon>
    <ListItemText primary="Account" />
  </ListItem>
));

export default AccountListItem;