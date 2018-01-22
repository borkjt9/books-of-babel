import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import App from './components/app/App';
import reducers from './reducers';
import Books from './containers/books/books';
import Author from './containers/author/author';
import Blog from './containers/blog/blog';
import Art from './containers/art/art';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/home" component={App} />
        <Route path="/the-books" component={Books} />
        <Route path="/the-author" component={Author} />
        <Route path="/the-blog" component={Blog} />
        <Route path="/the-art" component={Art} />

        <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
