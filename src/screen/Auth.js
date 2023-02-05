import React from 'react';
import { Alert, TouchableOpacity, TextInput, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { userLogin, userSignup } from '../help/authFetch';
import validator from '../help/validator';
import { login } from '../help/authSlice';
import { SIZE, COLOR } from '../help/constance';

function Auth() {
    const dispatch = useDispatch();

    const Login = () => {
        const [user, setUser] = React.useState('');
        const [pass, setPass] = React.useState('');
        const [msg, setMsg] = React.useState('');

        const handleTypeUser = (e) => {
            setUser(e);
            setMsg('');
        };
        const handleTypePass = (e) => {
            setPass(e);
            setMsg('');
        };
        const handleSubmit = () => {
            let val = validator({ require: user, require: pass });
            setMsg(val);

            if (!val) {
                const fet = async () => {
                    try {
                        const res = await userLogin(user, pass);

                        if (res) {
                            dispatch(login(res));
                        } else {
                            setMsg('Bạn kiểm tra lại user và password');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                };
                fet();
            }
        };

        return (
            <View style={styles.wrapper}>
                <Text style={styles.header}>Đăng nhập</Text>

                <TextInput
                    style={styles.input}
                    textContentType="username"
                    placeholder="username..."
                    onChangeText={handleTypeUser}
                    onBlur={() => setMsg(validator({ require: user }))}
                />

                <TextInput
                    style={styles.input}
                    textContentType="password"
                    placeholder="password..."
                    secureTextEntry
                    onChangeText={handleTypePass}
                    onBlur={(e) => setMsg(validator({ require: pass }))}
                />

                <Text style={{ color: 'red', marginVertical: 20 }}>{msg}</Text>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 150, marginLeft: 200 }}>
                    <Text style={{ color: COLOR.blue, fontStyle: 'italic' }}>{'Sign up ->'}</Text>
                </TouchableOpacity>
            </View>
        );
    };
    const Signup = () => {
        const [user, setUser] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [pass, setPass] = React.useState('');
        const [pass2, setPass2] = React.useState('');
        const [msg, setMsg] = React.useState('');

        const handleTypeUser = (e) => {
            setUser(e);
            setMsg('');
        };
        const handleTypeEmail = (e) => {
            setEmail(e);
            setMsg('');
        };
        const handleTypePass = (e) => {
            setPass(e);
            setMsg('');
        };
        const handleTypePass2 = (e) => {
            setPass2(e);
            setMsg('');
        };
        const handleSubmit = () => {
            let val = validator({
                require: user,
                email: email,
                'min:5': pass,
                passConfirm: `${pass}:${pass2}`,
            });
            setMsg(val);

            if (!val) {
                const fet = async () => {
                    try {
                        const res = await userSignup(user, pass, email);

                        if (res) {
                            Alert.alert('Đăng ký thành công', 'Bạn có muốn tiếp tục với tài khoản mới ?', [
                                {
                                    text: 'Thoát',
                                    onPress: () => {},
                                    style: 'cancel',
                                },
                                {
                                    text: 'Đồng ý',
                                    onPress: () => dispatch(login(res)),
                                },
                            ]);
                        } else {
                            setMsg('Lỗi đăng ký...');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                };
                fet();
            }
        };

        return (
            <View style={styles.wrapper}>
                <Text style={styles.header}>Đăng ký</Text>

                <TextInput
                    style={styles.input}
                    textContentType="username"
                    placeholder="username..."
                    onChangeText={handleTypeUser}
                    onBlur={() => setMsg(validator({ require: user }))}
                />
                <TextInput
                    style={styles.input}
                    textContentType="email"
                    placeholder="email..."
                    onChangeText={handleTypeEmail}
                    onBlur={() => setMsg(validator({ email: email }))}
                />

                <TextInput
                    style={styles.input}
                    textContentType="password"
                    placeholder="password..."
                    secureTextEntry
                    onChangeText={handleTypePass}
                    onBlur={(e) => setMsg(validator({ require: pass }))}
                />
                <TextInput
                    style={styles.input}
                    textContentType="password"
                    placeholder="confirm your password..."
                    secureTextEntry
                    onChangeText={handleTypePass2}
                    onBlur={(e) => setMsg(validator({ passConfirm: `${pass}:${pass2}` }))}
                />

                <Text style={{ color: 'red', marginVertical: 20 }}>{msg}</Text>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 100 }}>
                    <Text style={{ color: COLOR.blue, fontStyle: 'italic' }}>{'<- Login'}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            <Login />
            <Signup />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    wrapper: {
        width: SIZE.width,
        paddingHorizontal: 70,
    },
    header: {
        marginBottom: 40,
        fontSize: 30,
        fontWeight: 'bold',
        color: COLOR.active,
    },
    input: {
        minWidth: 250,
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLOR.inactive,
    },
    button: {
        marginHorizontal: 50,
        minHeight: 40,
        marginVertical: 20,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: COLOR.active,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Auth;
