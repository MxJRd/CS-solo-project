import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../stylesheets/styles.css';
import App from './App';
import { PageProvider } from '../contexts/PageContext';

ReactDOM.render(
  <PageProvider>
    <App />
  </PageProvider>,
  document.getElementById('root')
);