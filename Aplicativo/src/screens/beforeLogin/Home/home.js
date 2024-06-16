import React from 'react';
import { SafeAreaView, View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../constants/beforeLogin/styleHome';

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
                <Text style={styles.welcomeText}>BEM VINDO</Text>
            </View>

            <View style={styles.nav}>
                <Pressable style={styles.navButtonSignIn} onPress={ () => navigation.navigate('GyMate Sign-in')}>
                    <Text style={styles.navButtonSignInText}>LOGIN</Text>
                </Pressable>

                <Pressable style={styles.navButtonSignUp} onPress={ () => navigation.navigate('GyMate Sign-up')}>
                    <Text style={styles.navButtonSignUpText}>REGISTRAR-SE</Text>
                </Pressable>

                {/* <Pressable style={styles.navButtonSignUp} onPress={ () => navigation.navigate('GyMate Auth')}>
                    <Text style={styles.navButtonSignUpText}>SING-IN/UP</Text>
                </Pressable> */}

                <Pressable style={styles.navButtonCRUD} onPress={ () => navigation.navigate('GyMate CRUD')}>
                    <Text style={styles.navButtonCRUDText}>TELA DO CRUD</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}