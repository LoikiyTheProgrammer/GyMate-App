import React, { useState } from 'react';
import styles from './styleSignIn';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { app } from '../../../components/confg';

export default function SignIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        const auth = getAuth(app);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in successfully!');
            navigation.navigate('GyMate Main');
        } catch (error) {
            console.error('Authentication error:', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}/>

            <View style={styles.divLogo}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>GyMate</Text>
                    <Text style={styles.logoSubText}>coloque seus dados de acesso para iniciar sua sessão</Text>
                </View>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Digite seu e-mail'
                    placeholderTextColor={'#1179e2'}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Digite sua senha'
                    placeholderTextColor={'#1179e2'}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.buttonForgot}>
                    <Text style={styles.buttonForgotText}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignIn} onPress={handleSignIn}>
                    <Image style={styles.buttonImage} source={require('../../../assets/imgs/Fundo-GyMate-90º.png')} />
                    <Text style={styles.buttonSignInText}>Entrar na conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('GyMate')}>
                    <Text style={styles.buttonBackText}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.nav}>
                <Text style={styles.navText}>Ainda não possui uma conta?</Text>
                <TouchableOpacity style={styles.navButtonSignUp} onPress={() => navigation.navigate('GyMate Sign-up')}>
                    <Text style={styles.navButtonSignUpText}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}/>
        </SafeAreaView>
    );
}