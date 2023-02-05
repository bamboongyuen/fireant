import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SIZE, COLOR } from '../help/constance';

function TabContent({ state, descriptors, navigation }) {
    const iconObj = {
        Home: 'home',
        Social: 'run-fast',
        Profile: 'clipboard-list-outline',
        Profile2: 'account-circle-outline',
        WatchList: 'account-convert-outline',
        Tool: 'draw-pen',
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.bgCenter} />
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel || options.title || route.name;
                const isFocused = state.index === index;

                let textColor = isFocused ? COLOR.active : COLOR.textGray;
                route.name === 'Profile' && (textColor = isFocused ? COLOR.black : COLOR.white);

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={[styles.item, route.name === 'Profile' && styles.center]}
                    >
                        <MaterialCommunityIcons
                            name={route.name === 'Profile' && isFocused ? iconObj['Profile2'] : iconObj[route.name]}
                            size={26}
                            color={textColor}
                        />
                        <Text style={[{ fontSize: 11, color: textColor }]}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: SIZE.header,
        backgroundColor: COLOR.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        paddingHorizontal: 10,
        // borderTopColor: COLOR.gray,
        // borderTopWidth: 1,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (SIZE.width - 20) / 5,
    },
    center: {
        backgroundColor: COLOR.active,
        height: SIZE.header,
        width: SIZE.header,
        borderRadius: 60,
        position: 'relative',
        top: -10,
    },
    bgCenter: {
        position: 'absolute',
        width: SIZE.header + 10,
        height: SIZE.header + 10,
        borderRadius: SIZE.header + 10,
        top: -15,
        left: SIZE.width / 2 - (SIZE.header + 10) / 2,
        backgroundColor: COLOR.white,
        borderColor: COLOR.active,
        borderWidth: 1,
        shadowColor: COLOR.active,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.05,
    },
});

export default TabContent;
