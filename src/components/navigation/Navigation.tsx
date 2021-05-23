import HomeListItem from './HomeListItem';
import DashboardsListItem from './DashboardsListItem';
import AccountListItem from './AccountListItem';
import React from 'react';
import SignOutListItem from './SignOutListItem';

export default function Navigation({ setToken }: { setToken: (userToken: any) => void }): JSX.Element {
  return (
    <React.Fragment>
      <HomeListItem />
      <DashboardsListItem />
      <AccountListItem />
      <SignOutListItem setToken={setToken} />
    </React.Fragment>
  );
}
