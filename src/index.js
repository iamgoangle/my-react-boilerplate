import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import store from './store/configureStore';
import router from './router';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// style
import '../dist/public/assets/css/animate.css';
import '../dist/public/assets/css/style.css';
import '../dist/public/assets/css/colors/blue-dark.css';

// third-party plugin
window.jQuery = window.$ =  require('jquery/dist/jquery.min');
import 'bootstrap/dist/js/bootstrap.min.js';

// root element
const rootElement = document.getElementById('root');


// render app component
const renderMyApp = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                {router}
            </Provider>
        </AppContainer>,
        rootElement
    );
};

renderMyApp();

if (module.hot) {
    module.hot.accept('./reducers', () => {
        // redux store has a method replaceReducer
        store.replaceReducer(appReducer);
    });

    module.hot.accept();
    renderMyApp();
}
