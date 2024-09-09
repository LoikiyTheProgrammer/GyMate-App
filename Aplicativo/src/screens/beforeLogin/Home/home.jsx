import React from 'react';
import styles from './styleHome';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../../assets/Fundo-GyMate.png')}/>

            <View style={styles.header}>
                <View style={styles.headerBox}>
                    <Text style={styles.headerText}>GyMate</Text>
                    <Text style={styles.headerSubText}>escolha o modo de acesso</Text>
                </View>
            </View>

            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Bem vindo</Text>
            </View>

            <View style={styles.nav}>
                <TouchableOpacity style={styles.navButtonSignIn} onPress={ () => navigation.navigate('GyMate Sign-in')}>
                    <Text style={styles.navButtonSignInText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButtonSignUp} onPress={ () => navigation.navigate('GyMate Sign-up')}>
                    <Text style={styles.navButtonSignUpText}>Registrar-se</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.navButtonCRUD} onPress={ () => navigation.navigate('GyMate CRUD')}>
                    <Text style={styles.navButtonCRUDText}>CRUD</Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
}