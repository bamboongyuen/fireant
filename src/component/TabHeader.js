import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { COLOR, SIZE } from '../help/constance';

function TabHeader() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.container, styles.center]} onPress={() => navigation.navigate('Message')}>
                <EvilIcons name="search" size={18} color={COLOR.textGray} />
                <View style={{ width: SIZE.width - 190 }}>
                    <Text>Tìm kiếm</Text>
                </View>
                <FontAwesome name="microphone" size={18} color={COLOR.textGray} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Message')}>
                <AntDesign name="message1" size={24} color={COLOR.textGray} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Notify')}>
                <FontAwesome name="bell" size={24} color={COLOR.textGray} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center' },
    center: { borderBottomColor: COLOR.bgGray, borderBottomWidth: 1, marginRight: 10, paddingBottom: 5 },

    iconBtn: { marginHorizontal: 7 },
});

export default TabHeader;
