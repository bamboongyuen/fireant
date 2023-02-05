import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SIZE, COLOR } from '../help/constance';
import { logout } from '../help/authSlice';
import ImageResize from './other/ImageResize';

function DrawerContent(props) {
    const dispatch = useDispatch();
    const { isLogout, profile } = useSelector((state) => state.auth);

    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            {isLogout || (
                <>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <ImageResize uri={profile.avatar} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 30 }}>{profile.name}</Text>
                            <Text style={{ fontSize: 20, color: COLOR.blue }}>{profile.email}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line} />
                </>
            )}

            <DrawerItemList {...props} />

            <View style={styles.line} />

            {isLogout || (
                <DrawerItem
                    label="Logout"
                    onPress={() => dispatch(logout())}
                    icon={() => (
                        <MaterialCommunityIcons
                            name="logout"
                            size={SIZE.icon}
                            color={COLOR.textGray}
                            style={{ width: 30 }}
                        />
                    )}
                />
            )}
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: COLOR.bgBlack,
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: COLOR.textGray,
        marginVertical: 20,
    },
});

export default DrawerContent;
