import React from 'react';
import { Provider } from 'react-redux';
import store from '../../listening/utils/store';
import ListeningSection from '../../listening/ListeningSection';

function Listening() {
  return (
    <Provider store={store}>
      <ListeningSection />
   
    </Provider>
  );
}

export default Listening;