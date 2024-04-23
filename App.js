import React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Index from './src/navigation';
import { AppLoader } from './src/components/AppLoader';

export default app = () => {
  return (
    <Provider store={store}>
      <Index />
      <AppLoader />
    </Provider>
  )
}