import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut, onAuthStateChanged } from '@firebase/auth';
import styles from './styleProfile';
import { app } from '../../../components/confg';

export default function Profile() {
    const navigation = useNavigation();

    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

        return () => unsubscribe()
    }, [auth])

    const handleLogout = async () => {
        try {
            await signOut(auth)
            console.log('User logged out successfully!')
            navigation.navigate('GyMate')
        } catch (error) {
            console.error('Logout error:', error.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../../assets/imgs/Fundo-GyMate.png')}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <Image style={styles.buttonNotificationImage} source={require('../../../assets/imgs/Bell-Icon.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.divProfile}>
                    <View style={styles.profile}>
                        <Image style={styles.profileImage} source={require('../../../assets/imgs/Profile-Placeholder.png')}/>
                        <Text style={styles.profileText}>{user?.email}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
                        <Text style={styles.buttonLogoutText}>Sair da conta</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButtonChat}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/imgs/Chat-Icon.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonHome} onPress={() => navigation.navigate('GyMate Main')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/imgs/Home-Icon.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonConfg} onPress={() => navigation.navigate('GyMate Profile')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/imgs/Profile-Icon.png')}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}