import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens';
import { ApolloProvider } from 'react-apollo'
import { client } from './config'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
