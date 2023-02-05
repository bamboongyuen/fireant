import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../tab/Home';
import Profile from '../tab/Profile';
import Social from '../tab/Social';
import Tool from '../tab/Tool';
import WatchList from '../tab/WatchList';
import TabContent from '../component/TabContent';

function Market({ route }) {
    const Tab = createBottomTabNavigator();

    React.useLayoutEffect(() => {
        //change header
    }, []);
    return (
        <Tab.Navigator tabBar={(props) => <TabContent {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Social" component={Social} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Tab.Screen name="WatchList" component={WatchList} options={{ headerShown: false }} />
            <Tab.Screen name="Tool" component={Tool} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default Market;
