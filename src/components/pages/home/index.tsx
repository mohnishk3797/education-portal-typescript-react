import React, { useState, useEffect, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import LoginTemplate from '../../templates/loginTemplate';
import { loginAction } from '../../../redux/actions/authActions';
// import Swal from 'sweetalert2';

export default function Home(): ReactElement {
  const dispatch = useDispatch();
  const handleSigninSubmit = (name: string) => {
    dispatch(loginAction({ name }));
    window.location.reload();
  };
  return <LoginTemplate handleSigninSubmit={handleSigninSubmit} />;
}
