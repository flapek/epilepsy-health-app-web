import HomeListItem from './HomeListItem';
import DashboardsListItem from './DashboardsListItem';
import AccountListItem from './AccountListItem';
import React from 'react';

const Navigation = (): JSX.Element => (
  <React.Fragment>
    <HomeListItem/>
    <DashboardsListItem/>
    <AccountListItem/>
  </React.Fragment>
);

export default Navigation;