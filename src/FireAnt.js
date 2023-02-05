import React from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DrawerContent from './component/DrawerContent';

import Market from './screen/Market';
import Invite from './screen/Invite';
import JoinRoom from './screen/JoinRoom';
import Learning from './screen/Learning';
import Notify from './screen/Notify';
import Setting from './screen/Setting';
import Auth from './screen/Auth';
import News from './screen/News';
import { COLOR, SIZE } from './help/constance';

function FireAnt() {
    console.log('render');
    const isLogout = useSelector((state) => state.auth.isLogout);

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer theme={DefaultTheme}>
            <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                {isLogout ? (
                    <>
                        <Drawer.Screen
                            name="Auth"
                            component={Auth}
                            options={{
                                drawerIcon: () => (
                                    <MaterialIcons
                                        name="login"
                                        size={SIZE.icon}
                                        color={COLOR.textGray}
                                        style={{ width: 30 }}
                                    />
                                ),
                            }}
                        />
                        <Drawer.Screen
                            name="News"
                            component={News}
                            options={{
                                drawerIcon: () => (
                                    <FontAwesome
                                        name="newspaper-o"
                                        size={SIZE.icon}
                                        color={COLOR.textGray}
                                        style={{ width: 30 }}
                                    />
                                ),
                            }}
                        />
                    </>
                ) : (
                    <>
                        <Drawer.Screen
                            name="Market"
                            component={Market}
                            options={{
                                drawerIcon: () => (
                                    <FontAwesome
                                        name="heart-o"
                                        size={SIZE.icon}
                                        color={COLOR.textGray}
                                        style={{ width: 30 }}
                                    />
                                ),
                            }}
                        />
                        <Drawer.Screen
                            name="Invite"
                            component={Invite}
                            options={{
                                drawerIcon: () => (
                                    <FontAwesome
                                        name="dribbble"
                                        size={SIZE.icon}
                                        color={COLOR.textGray}
                                        style={{ width: 30 }}
                                    />
                                ),
                            }}
                        />
                        <Drawer.Screen
                            name="JoinRoom"
                            component={JoinRoom}
                            options={{
                                drawerIcon: () => (
                                    <FontAwesome
                                        name="bicycle"
                                        size={SIZE.icon}
                                        color={COLOR.textGray}
                                        style={{ width: 30 }}
                                    />
                                ),
                            }}
                        />
                        <Drawer.Screen
                            name="Learning"
                            component={Learning}
                            options={{
                                drawerIcon: () => (
                                    <FontAwesome
                                        name="file-o"
                                        size={SIZE.icon}
                                        color={COLOR.textGray}
                                        style={{ width: 30 }}
                                    />
                                ),
                            }}
                        />
                        <Drawer.Screen
                            name="Notify"
                            component={Notify}
                            options={{
                                drawerIcon: () => (
                                    <FontAwesome
                                        name="bullhorn"
                                        size={SIZE.icon}
                                        color={COLOR.textGray}
                                        style={{ width: 30 }}
                                    />
                                ),
                            }}
                        />
                        <Drawer.Screen
                            name="Setting"
                            component={Setting}
                            options={{
                                drawerIcon: () => (
                                    <FontAwesome
                                        name="gear"
                                        size={SIZE.icon}
                                        color={COLOR.textGray}
                                        style={{ width: 30 }}
                                    />
                                ),
                            }}
                        />
                    </>
                )}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default FireAnt;
