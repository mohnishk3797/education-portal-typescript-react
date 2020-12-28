import React, { ReactElement } from 'react';
import Home from '../components/pages/home';
import Dashboard from '../components/pages/dashboard';
import University from '../components/pages/universities';

export const routes = [
  {
    key: 'dashboard',
    path: '/',
    title: '/',
    exact: true,
    component: function DashboardPage() {
      return <Dashboard />;
    },
  },
  {
    key: 'university',
    path: '/university',
    title: '/university',
    exact: true,
    component: function UniversityPage() {
      return <University />;
    },
  },
  {
    key: 'bootcamp',
    path: '/bootcamp',
    title: '/bootcamp',
    exact: true,
    component: function Bootcamp() {
      return <h1>Forward Bootcamp</h1>;
    },
  },
];
export const authRoutes = [
  {
    key: 'home',
    path: '/',
    title: '/',
    exact: true,
    component: function HomePage() {
      return <Home />;
    },
  },
];
