import React, { useState, useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ConfigurationScreen from './containers/Configuration';
import { loadTheme, initializeIcons } from '@fluentui/react';

loadTheme({});
initializeIcons();

const store = createStore(applyMiddleware(thunk));
const App = () => {
  const [page, setPage] = useState('home');
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const setWindowWidth = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 0;
      setScreenWidth(width);
    };
    setWindowWidth();
    window.addEventListener('resize', setWindowWidth);
    return () => window.removeEventListener('resize', setWindowWidth);
  }, []);

  const getContent = () => {
      return (
          <ConfigurationScreen
              screenWidth={screenWidth}
          />
      );
  };

  if (page === 'home') {
    setPage('configuration');
  }

  return <Provider store={store}>{getContent()}</Provider>;
};


export default App;
