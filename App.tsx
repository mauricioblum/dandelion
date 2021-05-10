import React from 'react';
import AppProvider from './src/contexts/appContext';
import Routes from './src/routes';
import { initFirebase } from './src/services/firebase';

initFirebase();

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
