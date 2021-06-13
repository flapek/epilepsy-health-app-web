import { withRouter } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { paths } from "../../utilities/common";

const DashboardsListItem = withRouter(({ history }) => (
    <ListItem button onClick={() => history.push(paths.dashboard.path) }>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboards" />
    </ListItem>
));

export default DashboardsListItem;
