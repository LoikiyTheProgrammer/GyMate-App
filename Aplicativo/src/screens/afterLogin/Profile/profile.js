import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut, onAuthStateChanged } from '@firebase/auth';
import styles from '../../../constants/afterLogin/styleProfile';
import { app } from '../../../components/confg';

export default function Profile() {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, [auth]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('User logged out successfully!');
            navigation.navigate('GyMate');
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../../assets/Fundo-GyMate.png')}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <Image style={styles.notificationImage} source={require('../../../assets/Bell-Icon.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.logoutBox}>
                    <Image style={styles.profileImage} source={require('../../../assets/Profile-Placeholder.png')}/>
                    <Text style={styles.emailText}>{user?.email}</Text>
                    <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
                        <Text style={styles.buttonLogoutText}>SAIR DA CONTA</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButtonChat}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Chat-Icon.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonHome} onPress={() => navigation.navigate('GyMate Main')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Return-Icon.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonConfg} onPress={() => navigation.navigate('GyMate Profile')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Profile-Icon.png')}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}