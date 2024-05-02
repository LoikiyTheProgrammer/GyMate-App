import React, { useState } from 'react';
import styles from '../../../constants/beforeLogin/styleSignIn';
import { SafeAreaView, View, Text, TextInput, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>GyMate</Text>
                <Text style={styles.subHeaderText}>coloque seus dados de acesso para iniciar sua sessão</Text>
            </View>

            <View style={styles.signIn}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu e-mail'
                    keyboardType='email-address'
                />
                <br></br>
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                />
                <Pressable style={styles.forgotButton}>
                    <Text style={styles.forgotButtonText}>Esqueci minha senha</Text>
                </Pressable>
                <br></br>
                <Pressable style={styles.buttonSignIn}>
                    <Image style={styles.buttonBackgroundImage} source={require('../../../assets/Fundo-GyMate-90º.png')}/>
                    <Text style={styles.buttonSignInText}>ENTRAR</Text>
                </Pressable>
                <br></br>
                <Pressable style={styles.buttonBack} onPress={ () => navigation.navigate('GyMate')}>
                    <Text style={styles.buttonBackText}>VOLTAR</Text>
                </Pressable>
            </View>

            <View style={styles.changeAccess}>
                <Text style={styles.changeAccessText}>Ainda não possui uma conta?</Text>
                <Pressable style={styles.navButtonSignUp} onPress={ () => navigation.navigate('GyMate Sign-up')}>
                    <Text style={styles.navButtonSignUpText}>CLIQUE AQUI</Text>
                </Pressable>
            </View>

            <View style={styles.footer}/>
        </SafeAreaView>
    );
}