import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { restore, login, logout } from '../help/authSlice';
import { SIZE, COLOR } from '../help/constance';

function Auth() {
    const dispatch = useDispatch();

    const Login = () => {
        return (
            <View style={styles.wrapper}>
                <Text>Login</Text>
                <Button title="login" onPress={() => dispatch(login('auth'))} />
            </View>
        );
    };
    const Signup = () => {
        return (
            <View style={styles.wrapper}>
                <Text>dang ky tai khoaa</Text>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <Login />
            <Signup />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        flexDirection: 'row',
    },
    wrapper: {
        width: SIZE.width,
    },
});

export default Auth;
