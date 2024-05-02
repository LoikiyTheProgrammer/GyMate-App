import React from 'react'
import styles from '../../constants/styleWelcome'
import { SafeAreaView, View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/Fundo-GyMate.png')}/>
            <View style={styles.header}>
                <View style={styles.headerBox}>
                    <Text style={styles.headerText}>GyMate</Text>
                    <Text style={styles.subHeaderText}>escolha o modo de acesso</Text>
                </View>
            </View>

            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>BEM VINDO</Text>
            </View>
            <View style={styles.navScreens}>
                <Pressable style={styles.navButtonLogin} onPress={ () => navigation.navigate('GyMate Sign-in')}>
                    <Text style={styles.navButtonLoginText}>LOGIN</Text>
                </Pressable>
                <br></br>
                <Pressable style={styles.navButtonSignUp} onPress={ () => navigation.navigate('GyMate Sign-up')}>
                    <Text style={styles.navButtonSignUpText}>REGISTRAR-SE</Text>
                </Pressable>
                <br></br>
                <Pressable style={styles.navButtonCRUD} onPress={ () => navigation.navigate('GyMate CRUD')}>
                    <Text style={styles.navButtonCRUDText}>TELA DO CRUD</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}