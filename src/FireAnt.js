import React from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Button, StyleSheet, Text, View } from 'react-native';

import Market from './screen/Market';
import Auth from './screen/Auth';

function FireAnt() {
    console.log('render');
    const isLogout = useSelector((state) => state.auth.isLogout);

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            {isLogout ? (
                <>
                    <Drawer.Screen name="Auth" component={Auth} />
                </>
            ) : (
                <>
                    <Drawer.Screen name="Market" component={Market} />
                </>
            )}
        </Drawer.Navigator>
    );
}

export default FireAnt;
