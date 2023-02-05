import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/help/store';
import FireAnt from './src/FireAnt';

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <FireAnt />
            </NavigationContainer>
        </Provider>
    );
}

export default App;
