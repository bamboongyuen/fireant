import React from 'react';
import { Provider } from 'react-redux';

import store from './src/help/store';
import FireAnt from './src/FireAnt';

function App() {
    return (
        <Provider store={store}>
            <FireAnt />
        </Provider>
    );
}

export default App;
