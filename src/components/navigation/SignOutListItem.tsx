import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ClearLocalStorage } from '../../utilities/localStorageService';

export default function SignOutListItem({ setToken }: { setToken: (userToken: any) => void }) {
  return (
    <ListItem button onClick={() => {
      setToken({ "token": "" })
      ClearLocalStorage();
      }}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sign out" />
    </ListItem>
  );
}
