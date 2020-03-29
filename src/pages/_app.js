import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxAndDIcontainer from '../withReduxAndDIcontainer.js';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore, DIContainer } = this.props;
    return (
      <Provider store={reduxStore} container={DIContainer}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxAndDIcontainer(MyApp);
