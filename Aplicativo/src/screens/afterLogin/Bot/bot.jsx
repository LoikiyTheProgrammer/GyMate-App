import React from 'react';
import styles from './styleBot';
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bot() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../../assets/Fundo-GyMate.png')} />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <Image style={styles.notificationImage} source={require('../../../assets/Bell-Icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.welcome}>
                    <Image style={styles.botImage} source={require('../../../assets/AI-Icon.png')} />
                    <Text style={styles.botText}>O que você deseja exercitar?</Text>
                </View>

                <View style={styles.rotineListBox}>
                    <ScrollView style={styles.GeminiAnswer}>
                        
                    </ScrollView>

                    <View style={styles.GeminiBox}>
                        <TextInput
                            style={styles.GeminiInput}
                            placeholder='Digite aqui'
                            placeholderTextColor={'#1179e2'}
                        />

                        <TouchableOpacity style={styles.GeminiButton}>
                            <Text style={styles.GeminiButtonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButtonChat}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Chat-Icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonHome} onPress={() => navigation.navigate('GyMate Main')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Home-Icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonConfg} onPress={() => navigation.navigate('GyMate Profile')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Profile-Icon.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}