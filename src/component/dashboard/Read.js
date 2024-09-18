import React from 'react';
import { Provider } from 'react-redux';
// import store from './listening/utils/store';
// import ListeningSection from './listening/ListeningSection';
import store from '../../reading/utils/store';
import ReadingSection from '../../reading/readingSection/ReadingSection';


function Read() {
  return (
    <Provider store={store}>
      <ReadingSection />
   
    </Provider>
  );
}

export default Read;