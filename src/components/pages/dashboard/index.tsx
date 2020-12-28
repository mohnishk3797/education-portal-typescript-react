import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';

const userName = (state: RootState) => state.auth.user.name;

export default function Dashboard(): ReactElement {
  const name = useSelector(userName);
  return <h1>Welcome {name}!</h1>;
}
